const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let monsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  monsterHealth -= damage;
}

attackBtn.addEventListener("click", attackHandler);
