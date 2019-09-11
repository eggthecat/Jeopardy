export class Jeopardy {
  getCategories(category) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://jservice.io/api/categories?count=5`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  // getClues(clue) {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     const url = `http://jservice.io/api/clues?count=5&category=${clue}`
  //     request.onload = function(){
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(Error(request.statusText));
  //       }
  //     }
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // }
}


const toggleActive = (e) => {
  if(e.className == 'tile active') {
    e.className = 'tile';
  } else {
    e.className = 'tile active';
  }
}


let catPop = function(){
  let categories = request;
  let catArray = []
  let titleArray = []
  for (var i = 0; i < categories.length; i++) {
    catIdArray.push(categories[i].id);
    catTitleArray.push(categories[i].title);
  }
  return catIdArray
}

for (var i = 0; i < catIdArray.length; i++) {
  $(`#cat${i}`).html(catIdArray[i])
}

// getClues(catIdArray[i])
