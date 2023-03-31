function getDogs() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      const breeds = data.message;
      const breedNames = Object.keys(breeds);

      const promises = breedNames.map(breed => {
        return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
          .then(response => response.json())
          .then(data => {
            const img = data.message
            return `<div class="card" style="max-width: 300px">
                      <img class="card-img-top" src="${img}" alt="${breed}" height="300px" style="object-fit: cover; object-position: center;">
                      <div class="card-body">
                        <h5 class="card-title">${breed}</h5>
                      </div>
                    </div>`;
          });
      });

      Promise.all(promises)
        .then(cards => {
          const container = document.querySelector('.container-grid');
          container.innerHTML = cards.join('');
        });
    });
}

getDogs();