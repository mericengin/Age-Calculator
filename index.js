const dateInput = document.getElementById("date-input");
const calculateBtn = document.getElementById("calculate-btn");
const resultText = document.getElementById("result-text");


function calculateAge() {

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    
    let userDate = new Date(dateInput.value);
    let userYear = userDate.getFullYear();
    let userMonth = userDate.getMonth() + 1;
    let userDay = userDate.getDate();


    if(isNaN(userDate)) {
        resultText.textContent = "Please provide a valid Date for Calculation!";
        resultText.style.color = "red";
        return;
    } else {
        let resultYear, resultMonth, resultDay;

        resultYear = currentYear - userYear;
        resultMonth = currentMonth - userMonth;
        resultDay = currentDay - userDay;

        if(resultMonth < 0 || resultMonth === 0 && resultDay < 0) {
            resultYear--;
            resultMonth += 12;
        }

        if(resultDay < 0 || resultDay === 0) {
            let tempDate = new Date(currentYear, currentMonth, 0);
            resultDay += tempDate.getDate();
            resultMonth--;
        }

        resultText.textContent = `You are ${resultYear} years, ${resultMonth} months, ${resultDay} days Old!`;
        resultText.style.color = "#4CAF50";

    }
}

calculateBtn.addEventListener('click', calculateAge);