const displayStatus = (isLoggedIn) =>
  isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(displayStatus(true));
console.log(displayStatus(false));
