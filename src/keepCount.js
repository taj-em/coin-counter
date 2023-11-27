export default getChange = (userInput) => {
  if (isNaN(userInput)) {
    return;
  }
  if (userInput < 0.25) {
    return userInput;
  } else {
    console.log(userInput);
    return getChange((userInput - 0.25).toFixed(2));
  }
}