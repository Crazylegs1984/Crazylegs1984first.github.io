const myImage = document.querySelector("img");
myImage.onmouseover = () => {
const mySrc = myImage.getAttribute("src");
if ( mySrc === "images/timeForChange1.jpg") {
    myImage.setAttribute ("src", "images/timeForChange2.jpg");
} else {
    myImage.setAttribute ("src", "images/timeForChange1.jpg");
}
};
myImage.onmouseleave = () => {
    const mySrc = myImage.getAttribute("src");
    if ( mySrc === "images/timeForChange1.jpg") {
        myImage.setAttribute ("src", "images/timeForChange2.jpg");
    } else {
        myImage.setAttribute ("src", "images/timeForChange1.jpg");
    }
    };

    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");

    function setUserName() {
        const myName = prompt("Please enter your name.");
        if (!myName) {
            setUserName();
        } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Small steps make big changes, ${myName}`;
      }
    }

      if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Small steps make big changes, ${storedName}`;
      }

      myButton.onclick = () => {
        setUserName();
      };