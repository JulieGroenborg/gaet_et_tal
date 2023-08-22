// Random-funktionsgenerere

const rand = Math.random() * 101;
const tal = Math.floor(rand);

console.log(tal);

// document.getElementById("tallet").value = tal;
// document.write(tal);

document.getElementById("knap").addEventListener("click", run);

function run() {
  const userInput = document.getElementById("userinput").value;
  if (userInput == tal) {
    document.getElementById("resultat").textContent =
      "Waaauw, du gættede rigtigt. Tillykke!";
    document.getElementById("bear").classList.remove("hide");
  } else if (userInput > tal) {
    document.getElementById("resultat").textContent =
      "Forkert! Du gættede desværre et for højt tal";
  } else if (userInput < tal) {
    document.getElementById("resultat").textContent =
      "Forkert! Du gættede desværre et for lavt tal";
  }
}
