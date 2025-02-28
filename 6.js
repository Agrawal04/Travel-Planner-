function updatePeopleCount(value) {
    document.getElementById("people-count").textContent = `${value} People`;
}


function updateBudgetRange(value) {
    document.getElementById("budget-label").textContent = `${value - 5}-${value}K`;
}

function openNextPage()
{
    window.location.href="7.html";
}