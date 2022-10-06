// Rauf Anata - 101220889

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve({ message: "delayed success!" }), 500);
  });

const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject({ Error: "delayed exception!" }), 500);
  });

resolvedPromise().then((result) => {
  console.log(result);
});

rejectedPromise().catch((error) => {
  console.log(error);
});
