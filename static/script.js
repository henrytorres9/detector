// function handleImage(event) {
//   const image = document.getElementById("imagePreview");
//   image.src = URL.createObjectURL(event.target.files[0]);
//   image.onload = function () {
//     // Convertir la imagen a base64
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     canvas.width = image.width;
//     canvas.height = image.height;
//     context.drawImage(image, 0, 0);
//     const base64Image = canvas.toDataURL("image/jpeg");

//     // Enviar la imagen al servidor
//     analyzeImage(base64Image);
//   };
// }

// function displayResults(peopleCount, catsCount, plantsCount) {
//   const resultsElement = document.getElementById("results");
//   resultsElement.innerHTML = `
//     <h2>Resultados:</h2>
//     <p id="resultPeople">Personas: ${peopleCount}</p>
//     <p id="resultCats">Gatos: ${catsCount}</p>
//     <p id="resultPlants">Plantas: ${plantsCount}</p>
//   `;
// }

// function analyzeImage(imageData) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "/detect_objects", true);
//   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == XMLHttpRequest.DONE) {
//       if (xhr.status == 200) {
//         const results = JSON.parse(xhr.responseText);
//         displayResults(
//           results.peopleCount,
//           results.catsCount,
//           results.plantsCount
//         );
//       } else {
//         console.error("Ocurrió un error al analizar la imagen.");
//       }
//     }
//   };

//   const data = JSON.stringify({ image: imageData });
//   xhr.send(data);
// }
