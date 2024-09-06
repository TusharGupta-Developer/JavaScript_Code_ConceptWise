const songs = [
    {
      title: 'Song 1',
      src: 'song1.mp3'
    },
    {
      title: 'Song 2',
      src: 'song2.mp3'
    },
    {
      title: 'Song 3',
      src: 'song3.mp3'
    }
  ];
  
  const songListElement = document.getElementById('songList');
  const audioPlayer = document.getElementById('audioPlayer');
  
  songs.forEach((song, index) => {
    const songElement = document.createElement('div');
    songElement.classList.add('song');
    
    const titleElement = document.createElement('span');
    titleElement.textContent = song.title;
    
    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.addEventListener('click', () => {
      audioPlayer.src = song.src;
      audioPlayer.play();
    });
    
    songElement.appendChild(titleElement);
    songElement.appendChild(playButton);
    songListElement.appendChild(songElement);
  });
  