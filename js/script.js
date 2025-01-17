const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const outputCard = document.querySelector('.output')

let cards = "";
// creo un ciclo for per stampare in pagina le card 
for(let i = 0; i < teamMembers.length; i++){
  let membroIesimo = teamMembers[i];
  // verifico se funziona stampo il risultato in console
  // console.log(membroIesimo)

  // estrapolo i valori dagli oggetti 
  const {name, role, email, img} = membroIesimo;

  cards += `<div class="col-4 card mb-3 me-4 bg-black text-white" style="max-width: 410px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title fw-bolder">${name}</h5>
                      <p class="card-text">${role}</p>
                      <p class="card-text">${email}<small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            `
  // console.log(cards)
  outputCard.innerHTML = cards
}


