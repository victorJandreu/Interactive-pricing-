const range = document.querySelector("#range")
const dinero = document.getElementById("dinero")
const pageViews = document.getElementById("pageV")
const btn = document.getElementById("btn-div")

btn.addEventListener("click", function(){
    btn.classList.toggle("active")
    checkNumber()
})

range.addEventListener("input", () => {

    const min = range.min
    const max = range.max
    const currentVal = range.value

    range.style.backgroundSize = ((currentVal - min) / (max - min)) * 100 + "% 100%"


    checkNumber()


} )

function checkNumber(){
    let dineroNumber = Number(dinero.textContent)
    let pageValue = pageViews.textContent

    if(range.value == 0){dineroNumber = 8; pageValue = "10K"} 
    else if(range.value == 25) {dineroNumber = 12; pageValue = "50K"}
    else if(range.value == 50) {dineroNumber = 16; pageValue = "100K"}
    else if(range.value == 75) {dineroNumber = 24; pageValue = "500K"}
    else {dineroNumber = 36; pageValue = "1M"}

    if(btn.classList.contains("active")){
        dineroNumber = dineroNumber * 0.75
    }

    dinero.textContent = dineroNumber.toFixed(2);
    pageViews.textContent = pageValue
}


/* 

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.



*/