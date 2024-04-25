document.addEventListener('DOMContentLoaded', function() {
    // Sample data of songs (you can replace this with your actual data)
    const songs = [
        { title: "Song 1", image: "song1.jpg" },
        { title: "Song 2", image: "song2.jpg" },
        { title: "Song 3", image: "song3.jpg" },
        { title: "Song 4", image: "song4.jpg" },
        { title: "Song 5", image: "song5.jpg" }
    ];

    const songsSection = document.getElementById('songs');

    // Function to create HTML for each song
    function createSongElement(song) {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        const image = document.createElement('img');
        image.src = song.image;
        const title = document.createElement('h3');
        title.textContent = song.title;
        songElement.appendChild(image);
        songElement.appendChild(title);
        return songElement;
    }

    // Add songs to the DOM
    songs.forEach(song => {
        const songElement = createSongElement(song);
        songsSection.appendChild(songElement);
    });
});
