const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const HEAL_VALUE = 30;
const MONSTER_ATTACK_VALUE = 14;
const ATTACK = "ATTACK";
const STRONG_ATTACK = "STRONG_ATTACK";
const LOG_ATTACK = "LOG_ATTACK";
const LOG_MONSTER_ATTACK = "LOG_MONSTER_ATTACK";
const LOG_STRONG_ATTACK = "LOG_STRONG_ATTACK";
const LOG_HEAL = "LOG_HEAL";
const LOG_GAME_OVER = "LOG_GAME_OVER";
const LOG_GAME_RESET = "LOG_GAME_RESET";
const LOG_WINNER = "LOG_WINNER";

const max = prompt("Choose the max Life", "100");
if (isNaN(max) || max < 0) {
  max = 100;
}
let chosenMaxLife = parseInt(max);
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let logEntries = [];

adjustHealthBars(chosenMaxLife);

function writeToLog(event, val, playerHealth, monsterHealth) {
  const logEntry = {
    event: event,
    val: val,
    playerHealth: playerHealth,
    monsterHealth: monsterHealth,
  };
  logEntries.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
  writeToLog(LOG_GAME_RESET, "Reset Game", chosenMaxLife, chosenMaxLife);
}

function endGame() {
  let initialCurrentPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_MONSTER_ATTACK,
    playerDamage,
    currentPlayerHealth,
    currentMonsterHealth
  );
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialCurrentPlayerHealth;
    removeBonusLife();
    setPlayerHealth(currentPlayerHealth);
    alert("Saved By Bonus Health");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    writeToLog(LOG_WINNER, "Player", currentPlayerHealth, currentMonsterHealth);
    reset();
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    writeToLog(
      LOG_WINNER,
      "Monster",
      currentPlayerHealth,
      currentMonsterHealth
    );
    reset();
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("Draw");
    writeToLog(LOG_WINNER, "DRAW", currentPlayerHealth, currentMonsterHealth);
    reset();
  }
}

function attackMode(mode) {
  let damageValue;
  if (mode === ATTACK) {
    damageValue = ATTACK_VALUE;
  } else {
    damageValue = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(damageValue);
  currentMonsterHealth -= damage;
  if (mode === ATTACK) {
    writeToLog(LOG_ATTACK, damage, currentPlayerHealth, currentMonsterHealth);
  } else {
    writeToLog(
      LOG_STRONG_ATTACK,
      damage,
      currentPlayerHealth,
      currentMonsterHealth
    );
  }
  endGame();
}

function attackHandler() {
  attackMode(ATTACK);
}
function strongHandler() {
  attackMode(STRONG_ATTACK);
}
function healPlayerHandler() {
  let healvalue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("Cant go higher than MAX");
    healvalue = chosenMaxLife - currentPlayerHealth;
  } else {
    healvalue = HEAL_VALUE;
  }
  currentPlayerHealth += healvalue;
  increasePlayerHealth(healvalue);
  writeToLog(LOG_HEAL, healvalue, currentPlayerHealth, currentMonsterHealth);
  endGame();
}
function logPlayerHandler() {
  console.log(logEntries);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", logPlayerHandler);
