export function uploadPhoto() {
  console.log('first promise');
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  console.log('second promise');
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}


function firstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('first promise');
    }, 1000);
  });
}

// function secondPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('second promise');
//     }, 3000);
//   });
// }


// function resolveAll() {
//   return Promise.all([firstPromise(), secondPromise()])
//   .then((results) => {
//     console.log("results",results)
//     return results
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// }

// resolveAll();