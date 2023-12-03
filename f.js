const faithLevel = document.getElementById('fs')
            const btn = document.getElementById('submit');

            btn.onclick = checkFaith

const out = document.querySelector("output")

function checkFaith() {
    //if value is less than 100. deny, else grant
    if(faithLevel.value < 100) {
        out.innerHTML = " <br/> Denied"
    } else {
        out.innerHTML = "<br/> Granted!"
    }
}

            
