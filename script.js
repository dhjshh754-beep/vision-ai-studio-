function generateVideo() {
    const prompt = document.getElementById("prompt").value;
    const result = document.getElementById("result");

    if (prompt.trim() === "") {
        result.innerHTML = "<p style='color:red;'>براہ کرم پہلے پرامپٹ لکھیں۔</p>";
        return;
    }

    result.innerHTML = `
        <h3>✅ Prompt Submitted</h3>
        <p>${prompt}</p>
        <p>🚀 AI ویڈیو تیار ہو رہی ہے...</p>
    `;
}
