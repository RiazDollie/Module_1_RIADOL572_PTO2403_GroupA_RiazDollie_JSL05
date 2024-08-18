// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "MIDDLE OF THE NIGHT", artist: "Loveless", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Plan Z", artist: "BOI WHAT", genre: "Rock" },
    { title: "Guiding Light", artist: "Caskets", genre: "Rock" },
    { title: "Espresso", artist: "Sabrina Carpenter", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Part-Time Lover", artist: "Stevie Wonder", genre: "R&B" },
    { title: "DArkside", artist: "Bring me the Horizon", genre: "Rock" },
    { title: "Smooth Criminal", artist: "Michael Jackson", genre: "Pop" },
    { title: "Lying From You", artist: "Linkin Park", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "R&B" ,
    "Groot" : "Rock" ,
    "Rocket" : "Pop" ,
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return { guardian, playlist };
    });
}


// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

const container = document.getElementById('playlists');

playlists.forEach(({ guardian, playlist }) => {
    const playlistDiv = document.createElement('div');
    playlistDiv.className = 'playlist';

    const title = document.createElement('h2');
    title.textContent = `${guardian}'s Playlist`;
    playlistDiv.appendChild(title);
    

    playlist.forEach(song => {
      const songElement = document.createElement('div');
      songElement.className = 'song';

        const songTitle = document.createElement('span');
        songTitle.className = 'song-title';
        songTitle.textContent = song.title;

        const artistName = document.createElement('span');
        artistName.className = 'artist-name';
        artistName.textContent = ` by ${song.artist}`;

        songElement.appendChild(songTitle);
        songElement.appendChild(artistName);

        playlistDiv.appendChild(songElement);
    });

    container.appendChild(playlistDiv);
});


