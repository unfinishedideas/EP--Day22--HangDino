export class DinoService {
  async getDinoWord() {
    try {
      let response = await fetch("http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1");
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}


// http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1

// fetch("http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1")
// .then(function(response) {
//   return response.json();
// })
// .then(function(jsonifiedResponse) {
//   getElements(jsonifiedResponse);
// });
