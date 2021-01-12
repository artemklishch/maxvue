function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      roundNumber: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.roundNumber % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.roundNumber++;
      const attacValue = getRandomNumber(5, 12);
      this.monsterHealth -= attacValue;
      this.addLogMessage("player", "attack", attacValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attacValue = getRandomNumber(8, 12);
      this.playerHealth -= attacValue;
      this.addLogMessage("monster", "attack", attacValue);
    },
    specialAttackMonster() {
      this.roundNumber++;
      const attacValue = getRandomNumber(10, 25);
      this.monsterHealth -= attacValue;
      this.addLogMessage("player", "attack", attacValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.roundNumber++;
      const healValue = getRandomNumber(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else this.playerHealth += healValue;
      this.addLogMessage("player", "heal", healValue);
      this.attackMonster();
    },
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
      this.roundNumber = 0;
      this.logMessages = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
