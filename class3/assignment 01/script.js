// **************************************
//  CURRENCY CONVERTER

document.getElementById("converter").addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;

  document.getElementById("converted").innerText =
    currency === "pkr"
      ? (message = `${amount} Rupees are equal to ${amount * 170.81} Dollars`)
      : (message = `${amount} Dollars are equal to ${(amount / 170.81).toFixed(
          5
        )} Rupees`);
});

// **************************************
//  GRADE CHECKER

document.getElementById("grade").addEventListener("submit", (e) => {
  e.preventDefault();

  const marks = document.getElementById("marks").value;

  document.getElementById("Grade").innerText =
    marks >= 80
      ? "You Got A1 Grade"
      : marks >= 70 && marks < 80
      ? "You Got A Grade"
      : marks >= 60 && marks < 70
      ? "You Got B Grade"
      : marks >= 50 && marks < 60
      ? "You Got C Grade"
      : "You Failed, Better Luck Next Time";
});

// **************************************
//  TEMPRATURE CHECKER

document.getElementById("checker").addEventListener("submit", (e) => {
  e.preventDefault();

  const temprature = document.getElementById("temprature").value;

  document.getElementById("checked").innerText =
    temprature >= 25
      ? "No Need to Carry Jacket"
      : temprature < 25 && temprature >= 15
      ? "Please Carry Your Jacket."
      : temprature < 15 && temprature >= 1
      ? "Please Carry Your Coat."
      : temprature <= 0
      ? "Please Don't Go Out."
      : "";
});
