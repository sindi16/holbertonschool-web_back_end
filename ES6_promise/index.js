// const myPromise = new Promise((resolve,reject)=>{
//   resolve({status:404, body:'not found'});
// });


// myPromise
// .then((result)=>{
//   console.log(result);
//   if (result.status === 404) {
//     // return Promise.reject(new Error('not found'));
//     throw new Error('not found');
//   }
// })
// .catch((error)=>{
//   console.log(error); 
//   return error;
// });




const myPromise = new Promise((resolve, reject) => {
  // reject({ status: 200, body: 'Error message' });
  resolve({ status: 200, body: 'Success message' });
});


async function handlePromise() {
  try {
    const result = await myPromise;
    console.log(result);
    return result;
    // if (result.status === 404) {
    //   throw new Error('not found');
    // }
  } catch (error) {
    console.log(error);
    return error;
  }
}

handlePromise();