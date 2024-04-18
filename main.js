const range = document.querySelector("#range")

range.addEventListener("input", () => {

    const min = range.min
    const max = range.max
    const currentVal = range.value

    range.style.backgroundSize = ((currentVal - min) / (max - min)) * 100 + "% 100%"
} )

/* 

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.



*/