function getDogs() {
  // this is the skeleton for the fetch function
  // fetch all the names of breeds so that breedNames is not an empty array
  // you may have to use Object.keys() method...
  // each breed should then be the title of the card and the alt of the image (which will come in the following task)
  // the code for the card has already been written for you

  const breedNames = []

  const container = document.querySelector('.container-grid');

  container.innerHTML = breedNames.map(breed => `
     <div class="card-body">
     <img class="card-img-top" src="" alt="" style="object-fit: cover; object-position: center;" height="300px" />
     <h5 class="card-title">Breed name</h5>
     </div>
     </div>`).join('');
}

getDogs();