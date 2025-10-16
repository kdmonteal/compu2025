var a = 0;

function loadAudio(valueSong) {
  
  var audio = document.getElementById('soundScreen');

    switch (valueSong) {
        case 1:
            audio.src = './src/sounds/01_game_menu.wav';
        break;
        case 2:
            audio.src = './src/sounds/02_game_background.wav';
        break;
        case 3:
            audio.src = './src/sounds/03_game_win.wav';
        break;
        case 4:
            audio.src = './src/sounds/04_game_over.wav';
        break;
    }

  audio.load();
}

loadAudio(3);