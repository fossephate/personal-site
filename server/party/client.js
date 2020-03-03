class Client {
	constructor(socketid) {
		this.socketid = socketid;
		this.userid = null;
		this.username = null;
		this.roomName = null;
		this.joinTime = new Date();

		// this.ip = this.socket.handshake.headers["x-real-ip"];
		// this.port = this.socket.handshake.headers["x-real-port"];

		this.isHost = false;
	}
}

class Party {
	constructor(socketid, roomName) {
		this.socketid = socketid;
		this.roomName = roomName;

		this.hostUsername = null;

		this.potentialDays = [];
		this.userSubmissions = {};

		this.usernames = [];
	}
}

module.exports.Party = Party;
module.exports.Client = Client;