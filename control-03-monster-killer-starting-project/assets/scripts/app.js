const ATTACK_VALUE = 10;
const STRONG_ATTACK = 20;
const HEAL_VALUE = 30;
const MONSTER_ATTACK_VALUE = 14;

const max = prompt("Choose the max Life", "100");
if (isNaN(max) || max < 0) {
  max = 100;
}
let chosenMaxLife = parseInt(max);
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endGame() {
  let initialCurrentPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialCurrentPlayerHealth;
    removeBonusLife();
    setPlayerHealth(currentPlayerHealth);
    alert("Saved By Bonus Health");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won");
    reset();
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("You Lost");
    reset();
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("Draw");
    reset();
  }
}

function attackMode(mode) {
  let damageValue;
  if (mode === "ATTACK") {
    damageValue = ATTACK_VALUE;
  } else {
    damageValue = STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(damageValue);
  currentMonsterHealth -= damage;
  endGame();
}

function attackHandler() {
  attackMode("ATTACK");
}
function strongHandler() {
  attackMode("STRONG_ATTACK");
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
  endGame();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongHandler);
healBtn.addEventListener("click", healPlayerHandler);
