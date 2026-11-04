function calculate() {
    const p = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value);
    const t = parseFloat(document.getElementById('time').value);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p < 0 || r < 0 || t < 0) {
        alert("Please fill out all fields with positive numbers.");
        return;
    }

    const interest = (p * r * t) / 100;
    const total = p + interest;

    document.getElementById('res-interest').innerText = `$${interest.toFixed(2)}`;
    document.getElementById('res-total').innerText = `$${total.toFixed(2)}`;
    document.getElementById('output').style.display = 'block';
}
