const encodeString = () => {
  let string = document.getElementById("string").value;
  var encodedStringBtoA = btoa(string);
  document.getElementById("output").value = encodedStringBtoA;
};

const decodeString = () => {
  let string = document.getElementById("string").value;
  var decodedStringAtoB = atob(string);
  document.getElementById("output").value = decodedStringAtoB;
};

const start = () => {
  let type = document.getElementById("encodeTyp").value;
  console.log("test");
  if (type === "encode") {
    encodeString();
  } else {
    decodeString();
  }
};

document.getElementById("startButton").addEventListener("click", startFunction);
function startFunction() {
  start();
}

document.addEventListener("keypress", function (e) {
  if (
    e.key === "Enter" &&
    document.activeElement.tagName.toLowerCase() !== "button"
  ) {
    startFunction();
  }
});
