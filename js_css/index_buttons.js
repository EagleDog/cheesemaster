
    // var clickity = new Howl({urls: ["../assets/click.ogg"] });
    // var swooshIn = new Howl({urls: ["../assets/swoosh1.ogg"] });
    // var swooshOut = new Howl({urls: ["../assets/swoosh2.ogg"] });

    function Soundy() {
      if (Math.random() < 0.6) {
        clickity.play();
      } else if (Math.random() > 0.5) {
         swooshIn.play();
      } else {
        swooshOut.play();
      }
    }

    // function GoBack() {
    //   swooshOut.play();
    //   setTimeout(function() {
    //     window.location = '../master/index.html';
    //   }, 800);
    // }

    // function GoForward() {
    //   swooshIn.play();
    //   setTimeout(function() {
    //     window.location = '../master/index.html';
    //   }, 800);
    // }

    // function Master() {
    //   clickity.play();
    //   setTimeout(function() {
    //     window.location = '../master/index.html';
    //   }, 400);
    // }

    // function Cheese() {
    //   clickity.play();
    //   setTimeout(function() {
    //     window.location = '../cheese/index.html';
    //   }, 300);
    // }
