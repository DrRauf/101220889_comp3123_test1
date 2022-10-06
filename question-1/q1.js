// Rauf Anata - 101220889

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

const lowerCaseWords = (arr) =>
  new Promise((resolve, reject) => {
    if (arr.length === 0 || !Array.isArray(arr)) reject("Invalid Array");
    resolve(
      arr
        .filter((item) => typeof item === "string")
        .map((word) => word.toLowerCase())
    );
  });

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
