# Dog Api exercise - Render a list of cards

## Instructions

To complete this exercise, you do not need to change anything in the html file.
Just add code to main.js.

### Part 1 - Retrieve breed names

- Inside the `getDogs()` function, use the `fetch()` method to retrieve all the names of breeds from the [Dog Api](https://dog.ceo/dog-api/) API endpoint. Revise the documentation to understand which is the right endpoint for this purpose.
- Use the retrieved breed names to generate the HTML code for each breed card. Each card should have the breed name as its title and `alt` attribute of the `img` tag.
- The `src` and `alt` attributes of the `img` tag should be empty to begin with.

### Part 2 - Retrieve a random image for each breed

For this part you should understand how make nested api calls.
To retrieve random images for each one of the breeds, you can use the `Promise.all`. `Promise.all` is a method that takes an array of promises and returns a promise that is resolved when all of the promises in the array are resolved.

- Inside the second `.then` block, declare a new variable `imagePromises` and use the method `.map` to iterate over the breedNames so you can create a promise using fetch for each breed name. Read the documentation to identify which endpoint should be called in order to retrieve a random image for a certain breed.
- Parse the response and return breed and image (this last one should be coming from data.message now, so you should assing img to data.message, use destructing).
- Reuse the code from the previous exercise, and with `Promise.all(imagePromises).then(...` iterate over the images so that the card this time will get breed and img.