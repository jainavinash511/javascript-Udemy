const ATTACK_VALUE = 10;
const STRONG_ATTACK = 20;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMode(mode) {
  let damageValue;
  if (mode === "ATTACK") {
    damageValue = ATTACK_VALUE;
  } else {
    damageValue = STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(damageValue);
  currentMonsterHealth -= damage;
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

function attackHandler() {
  attackMode("ATTACK");
}
function strongHandler() {
  attackMode("STRONG_ATTACK");
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongHandler);
