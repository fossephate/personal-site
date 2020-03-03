const port = 8002;
const socketio = require("socket.io");
let io = socketio({
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});
const config = require("./config.js");

const Client = require("./client.js").Client;
const Party = require("./client.js").Party;

// redis:
const bluebird = require("bluebird");
const redis = require("redis");
bluebird.promisifyAll(redis);
let redisClient = redis.createClient({ host: "localhost", port: 6379 });

io.listen(port, () => {
	console.log("server listening at port %d", port);
});

// misc:
function generatePartyIdentifier() {
	let sizeOfString = 5;
	let charset = "ABCDEFGHJKLMNPQRTUVWXY346789";
	let identifier = "";
	for (let i = 0; i < sizeOfString; i++) {
		identifier += charset[Math.floor(Math.random() * charset.length)];
	}
	return identifier;
}

let parties = {};

let clients = {};

function saveParties() {
	// stringify:
	let databaseString = JSON.stringify(parties);
	// store back in database:
	// store account at uniqueID location, at clients key:
	redisClient.setAsync("parties", databaseString).then((success) => {
		console.log(`stored database: ${success}`);
	});
}

// get existing DB:
redisClient.getAsync("parties").then((savedDB) => {
	let database;
	if (savedDB === null) {
		console.log("Creating party DB.");
		database = {};
	} else {
		database = JSON.parse(savedDB);
	}
	parties = database;
	saveParties();
});

// setTimeout(() => {
// 	for (let roomName in parties) {
// 		if (parties[roomName].hostUsername) {
// 			parties[roomName].hostUsername = parties[roomName].hostUsername.toLowerCase();
// 		}

// 		for (let i = 0; i < parties[roomName].usernames.length; i++) {
// 			parties[roomName].usernames[i] = parties[roomName].usernames[i].toLowerCase();
// 		}

// 		for (let username in parties[roomName].userSubmissions) {
// 			let sub = parties[roomName].userSubmissions[username];

// 			let newUsername = username.toLowerCase().trim();

// 			parties[roomName].userSubmissions[newUsername] = { ...sub };

// 			delete parties[roomName].userSubmissions[username];
// 		}
// 	}
// 	saveParties();
// }, 500);

io.on("connection", (socket) => {
	clients[socket.id] = new Client(socket.id);
	console.log(`#clients: ${Object.keys(clients).length}`);

	socket.on("createRoom", (data, cb) => {
		if (!clients[socket.id]) {
			console.log("client doesn't exist for some reason");
			cb({ success: false, reason: "client doesn't exist" });
			return;
		}

		// todo: ensure no conflicts:
		let roomName = generatePartyIdentifier();

		socket.join(roomName);
		clients[socket.id].isHost = true;
		clients[socket.id].roomName = roomName;

		parties[roomName] = new Party(socket.id, roomName);

		cb({
			success: true,
			roomName: roomName,
		});
	});

	socket.on("joinRoom", (data, cb) => {
		let client = clients[socket.id];
		if (!client) {
			console.log("client doesn't exist for some reason");
			cb({ success: false, reason: "client doesn't exist" });
			return;
		}

		let party = parties[data.roomName];

		if (!party) {
			console.log("party not found!");
			cb({ success: false, reason: "party not found!" });
			return;
		}

		// if (parties[data.roomName].usernames.indexOf(data.username) > -1) {
		// 	console.log("username in use!");
		// 	cb({ success: false, reason: "username in use!" });
		// 	return;
		// }

		let isHost = false;
		let previousData = null;

		data.username = data.username.toLowerCase().trim();

		if (parties[data.roomName].hostUsername === data.username) {
			isHost = true;
			clients[socket.id].isHost = true;
		} else if (parties[data.roomName].usernames.length === 0) {
			isHost = true;
			clients[socket.id].isHost = true;

			parties[data.roomName].hostUsername = data.username;
		}

		if (parties[data.roomName].usernames.indexOf(data.username) === -1) {
			parties[data.roomName].usernames.push(data.username);
		} else {
			// set to previous submission if it exists:
			previousData = parties[data.roomName].userSubmissions[data.username] || null;
		}
		socket.join(data.roomName);
		clients[socket.id].roomName = data.roomName;
		clients[socket.id].username = data.username;

		cb({
			success: true,
			isHost: isHost,
			potentialDays: parties[data.roomName].potentialDays,
			userSubmissions: isHost && parties[data.roomName].userSubmissions,
			canDays: previousData && previousData.canDays,
			cantDays: previousData && previousData.cantDays,
		});
	});

	socket.on("submitPotentialDays", (data, cb) => {
		let client = clients[socket.id];
		if (!client) {
			console.log("client doesn't exist for some reason");
			cb({ success: false, reason: "client doesn't exist" });
			return;
		}

		if (!client.roomName) {
			console.log("client not in a room for some reason");
			cb({ success: false, reason: "client not in a room for some reason" });
			return;
		}

		let party = parties[clients[socket.id].roomName];

		if (!party) {
			console.log("party not found!");
			cb({ success: false, reason: "party not found!" });
			return;
		}

		parties[clients[socket.id].roomName].potentialDays = data.potentialDays;

		cb({ success: true });
	});

	socket.on("submitDays", (data, cb) => {
		let client = clients[socket.id];
		if (!client) {
			console.log("client doesn't exist for some reason");
			cb({ success: false, reason: "client doesn't exist" });
			return;
		}

		if (!client.roomName) {
			console.log("client not in a room for some reason");
			cb({ success: false, reason: "client not in a room for some reason" });
			return;
		}

		let party = parties[clients[socket.id].roomName];

		if (!party) {
			console.log("party not found!");
			cb({ success: false, reason: "party not found!" });
			return;
		}

		parties[clients[socket.id].roomName].userSubmissions[client.username] = {
			canDays: data.canDays,
			cantDays: data.cantDays,
		};

		cb({ success: true });
	});

	socket.on("deleteSubmission", (data, cb) => {
		let client = clients[socket.id];
		if (!client) {
			console.log("client doesn't exist for some reason");
			cb({ success: false, reason: "client doesn't exist" });
			return;
		}

		if (!client.roomName) {
			console.log("client not in a room for some reason");
			cb({ success: false, reason: "client not in a room for some reason" });
			return;
		}

		let party = parties[clients[socket.id].roomName];

		if (!party) {
			console.log("party not found!");
			cb({ success: false, reason: "party not found!" });
			return;
		}

		console.log(Object.keys(parties[clients[socket.id].roomName].userSubmissions));

		delete parties[clients[socket.id].roomName].userSubmissions[data.username];

		cb({ success: true });
	});

	socket.on("disconnect", (data) => {
		let client = clients[socket.id];

		if (client) {
			delete clients[socket.id];
		}

		saveParties();
		console.log(`#clients: ${Object.keys(clients).length}`);
	});
});
