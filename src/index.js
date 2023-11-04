const refs = {
  formArea: document.querySelector('.form'),
  findBtn: document.querySelector('.top-button'),
  renderCard: document.querySelector('.down-div'),
};

refs.formArea.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;
  console.log(query);
  getFetch(query).then(data => {
    renderTicker(data)
  });
});

function getFetch(result) {
  const API_HOST = 'https://pokeapi.co/api/v2/';
  const END_POINT = `pokemon/${result}`;
  const url = API_HOST + END_POINT;
  return fetch(url).then(r => r.json());
}


function renderTicker({ name, sprites }) {
  const murkup = `
        <div class="wrap-div">
        <div class="wrap-block">
        <img src="${sprites.front_default}" alt="${name}" width="180">
        <h2>Name of Pokemon: <span class="green">${name}</span></h2>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias harum reiciendis voluptates praesentium quibusdam quod quaerat omnis impedit! Odio dolore quasi aut mollitia adipisci quia distinctio maxime temporibus ipsam sunt.  </p>
      </div>
      `;
  refs.renderCard.innerHTML = murkup;
}
