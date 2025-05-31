function orderPizza(name) {
    if (!name) {
        throw new Error("Name is required to order a pizza.");  
    }
    return `Thanks, ${name}! Your pizza is on the way!`;
}

document.getElementById('orderBtn').addEventListener('click', () => {
    const name = docuement.getElementById('nameInput').value;
    const messageEl = document.getElementById("message");

    try {
        const msg = orderPizza(name);
        messageEl.textContent = msg;
        messageEl.style.color = "blue";
    } catch (error) {
        messageEl.textContent = error.message;
        messageEl.style.color = "orange";      
    }
})