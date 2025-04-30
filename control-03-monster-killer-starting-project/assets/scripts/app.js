const ATTACK_VALUE = 10;
const STRONG_ATTACK = 20;
const HEAL_VALUE = 30;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endGame() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won");
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("You Lost");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("Draw");
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
