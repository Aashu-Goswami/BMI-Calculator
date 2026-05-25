document.querySelector('.button').addEventListener('click', function(e) {

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const final = document.getElementById('final')

    if(height === '' || height === '0' || isNaN(height)) {
        result.innerHTML = `Enter a valid height`
    } else if (weight === "" || weight ==='0' || isNaN(weight)) {
        result.innerHTML = `Enter a valid weight`
    } else {
        const bmi = (weight/((height/100)*(height/100))).toFixed(2)
        result.innerHTML = `${bmi}`
        if(bmi < 18.6) {
            final.innerHTML = `UNDER WEIGHT`
        } else if(bmi > 24.9) {
            final.innerHTML = `OVER WEIGHT`
        } else {
            final.innerHTML = `NORMAL WEIGHT`
        }
    }
} )