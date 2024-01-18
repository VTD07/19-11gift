function getInputValue() {
    var inputElement = document.getElementById("userInput");
    var inputValue = inputElement.value;
    if(inputValue=="Phạm Yến Trang" || inputValue=="Ychang") window.location.href="loadpage.html"
    else alert("Hmm không phải của bạn rồi");
}
var inputElement = document.getElementById("userInput");
inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getInputValue();
    }
});
