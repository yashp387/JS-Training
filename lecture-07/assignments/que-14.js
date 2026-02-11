// Q14. The "Callback" Context Trap

const player = {
  score: 50,
  updateScore() {
    setTimeout(function () {
      console.log(this.score);
    }, 100);
  },
};

player.updateScore();

// output: undefined

/* Reason:  - In this code callback function of setTimeout method is regular function
            - And regular functions get their own this based on how they are called
            - And here setTimeout callback function not called with object
            - so this points to global object and there is no score so it's undefined
 */