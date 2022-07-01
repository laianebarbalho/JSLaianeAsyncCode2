const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open('GET', resource);
    request.send();
  });  
};

getTodos('todosAPIS/luigi.json')
  .then(data => {
    console.log('promise resolved: ', data);
  })
  .catch((err) => {
    console.log('Promise rejected:', err)
  })

// getTodos('todosAPIS/luigi.json',(err, data) => {
//   console.log(data);
//   getTodos('todosAPIS/mario.json', (err, data) => { // nãoé legal chamar callbacks dentro de callbacks, o melhor é usar promises!
//     console.log(data);
//     getTodos('todosAPIS/laiane.json', (err, data) => {
//       console.log(data);
//     })
//   })
// });

// Promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve('some data');
//     // reject('some error');
//   });
// }

// getSomething().then((data) => {  // essa forma é complicada pois há
//   console.log(data);
// }, (err) => {
//   console.log(err)
// });

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })