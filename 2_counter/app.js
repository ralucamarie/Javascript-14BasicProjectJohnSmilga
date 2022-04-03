let count = 0;

//select value and buttons
const values = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(e.currentTarget.classList);
    console.log(count);
    if (styles.contains("decrease")) {
      count--;
    }
    styles.contains("decrease")
      ? count--
      : styles.contains("increase")
      ? count++
      : styles.contains("reset")
      ? (count = 0)
      : 0;
    count > 0
      ? (values.style.color = "green")
      : count == 0
      ? (values.style.color = "black")
      : (values.style.color = "red");
    values.textContent = count;
  });
});
