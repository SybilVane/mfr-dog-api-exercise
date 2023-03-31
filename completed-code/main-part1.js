function getDogs() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      const breeds = data.message;
      const breedNames = Object.keys(breeds);
      const container = document.querySelector('.container-grid');

      breedNames.forEach(breed => container.innerHTML += `<div class="card" style="max-width: 300px">
            <img class="card-img-top" src="" alt="${breed}" height="300px" style="object-fit: cover; object-position: center;">
            <div class="card-body">
                <h5 class="card-title">${breed}</h5>
            </div>
        </div>`)
    })
    .catch(error => {
      console.error(error);
    });
}

getDogs();