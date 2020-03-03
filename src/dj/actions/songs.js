export const updateSongName = (songName) => {
	return {
		type: "UPDATE_SONG_NAME",
		payload: {
			songName: songName,
		},
	};
};

export const updateSongList = (songList) => {
	return {
		type: "UPDATE_SONG_LIST",
		payload: {
			songList: songList,
		},
	};
};

export const updateSearchResults = (searchResults) => {
	return {
		type: "UPDATE_SEARCH_RESULTS",
		payload: {
			searchResults: searchResults,
		},
	};
};