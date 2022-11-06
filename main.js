function creategames(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg"
    alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg"
    alt="Bandeira da ${player2}"/>
  </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "Quinta", creategames("brazil", "16:00",
  "servia")) +
  createCard(
    "28/11",
    "Segunda",
    creategames("brazil", "13:00", "switzerland") +
      creategames("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "Sexta", creategames("brazil", "16:00",
  "cameroon"))
