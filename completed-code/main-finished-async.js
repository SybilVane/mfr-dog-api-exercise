// using async/await
async function getDogs() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const { message: breeds } = await response.json()

    const breedNames = Object.keys(breeds)

    const imagePromises = breedNames.map(async breed => {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      const { message: img } = await response.json()
      return { breed, img }
    })

    const images = await Promise.all(imagePromises)

    const container = document.querySelector('.container-grid')

    container.innerHTML = images.map(({ breed, img }) =>
      `<div class="card" style="max-width: 300px">
          <img class="card-img-top" src="${img}" alt="${breed}" height="300px" style="object-fit: cover; object-position: center;">
          <div class="card-body">
            <h5 class="card-title">${breed}</h5>
          </div>
        </div>`
    )
      .join('')

  } catch (error) {
    console.error(error)
  }
}

getDogs();