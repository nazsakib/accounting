document.getElementById("expense-btn").addEventListener("click", function () {
    const incomeInput = document.getElementById("income-input").value;
    const foodInput = document.getElementById("food-input").value;
    const rentInput = document.getElementById("rent-input").value;
    const clothesInput = document.getElementById("clothes-input").value;

    const expenseTotal =
        parseFloat(foodInput) +
        parseFloat(rentInput) +
        parseFloat(clothesInput);

    const salaryRemaining = incomeInput - expenseTotal;

    if (incomeInput < expenseTotal) {
        return 0;
    }
    document.getElementById("expense").innerText = expenseTotal;
    document.getElementById("balance").innerText = salaryRemaining;

    // clearing input
    incomeInput.value = "";
    foodInput.value = "";
    rentInput.value = "";
    clothesInput.value = "";
});

// saving area
document.getElementById("saving-btn").addEventListener("click", function () {
    const savingInput = document.getElementById("saving-input").value;
    const incomeInput = document.getElementById("income-input").value;
    const foodInput = document.getElementById("food-input").value;
    const rentInput = document.getElementById("rent-input").value;
    const clothesInput = document.getElementById("clothes-input").value;

    const expenseTotal =
        parseFloat(foodInput) +
        parseFloat(rentInput) +
        parseFloat(clothesInput);

    const salaryRemaining = incomeInput - expenseTotal;

    const totalSaved = (savingInput / 100) * salaryRemaining;

    document.getElementById("savings").innerText = totalSaved;
    const remaining = document.getElementById("remaining");
    remaining.innerText = salaryRemaining - totalSaved;
});

// logout to the login page
document.getElementById("logout").addEventListener("click", function () {
    logoutBtn = location.href = "index.html";
});
