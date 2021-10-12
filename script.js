let calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculate);
function calculate()
    {
    let initialInvestment = parseInt(document.getElementById("amount").value);
    let rate = document.getElementById("rate").value;
    let months = document.getElementById("months").value;
    let result = document.getElementById("output");
    result.innerHTML = "";

    for(let i = 1; i <= months; i++)
    {
        result.insertAdjacentHTML("beforeend", "<div class='month'> Month "+i+"</div><br>")
        for (let j = 1; j <= 30; j++)
        {
            result.insertAdjacentHTML("beforeend", "<div class='day'> Day " + (30 * (i - 1) + j) + ": " + initialInvestment.toFixed(2) + "</div><br>");
            initialInvestment*=1+rate/100.0;
            
        }
    }
    result.scrollIntoView();
}

let scrollTop = document.getElementById("scrollToTop");
window.onscroll = ()=> {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

scrollTop.addEventListener("click", () =>
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
