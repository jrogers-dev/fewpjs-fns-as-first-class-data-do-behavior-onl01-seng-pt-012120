/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeInput) {
  let timeSplit = timeInput.split(':');
  timeSplit[0] = parseInt(timeSplit[0]);
  timeSplit[1] = parseInt(timeSplit[1]);
  if (timeSplit[0] < 12 ) {
    return "Good Morning";
  } else if (timeSplit[0] >= 12 && timeSplit[0] <= 18 ) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const greetingNode = document.getElementById("greeting"); 
  greetingNode.innerText = message;
}
