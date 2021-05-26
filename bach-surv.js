const contestants = ['./New Bach Images/Aaron.png','./New Bach Images/Andrew M.png','./New Bach Images/Andrew S.png','./New Bach Images/Austin.png','./New Bach Images/Bao.png','./New Bach Images/Brandon.png','./New Bach Images/Brendan.png','./New Bach Images/Christian.png','./New Bach Images/Cody.png','./New Bach Images/Connor B.png','./New Bach Images/Connor C.png','./New Bach Images/David.png','./New Bach Images/Dennis.png','./New Bach Images/Gabriel.png','./New Bach Images/Garrett.png','./New Bach Images/Greg.png','./New Bach Images/Hunter.png','./New Bach Images/James.png','./New Bach Images/Jeff.png','./New Bach Images/John.png','./New Bach Images/Joshua.png','./New Bach Images/Justin.png','./New Bach Images/Karl.png','./New Bach Images/Kyle.png','./New Bach Images/Landon.png','./New Bach Images/Marcus.png','./New Bach Images/Marty.png','./New Bach Images/Michael A.png','./New Bach Images/Mike P.png','./New Bach Images/Quartney.png','./New Bach Images/Tanner.png','./New Bach Images/Thomas.png','./New Bach Images/Tre.png','./New Bach Images/Viktor.png']

const image = document.querySelector('img')

let count = 0
image.setAttribute('src', contestants[Math.floor(Math.random()* contestants.length)])

const rose = document.querySelector('#rose')
rose.addEventListener('click', () => {
    const guy = image.getAttribute('src')
    console.log(guy)
    for (let i = 0; i < contestants.length; i++) {
        if (guy==contestants[i]) {
            contestants.splice(i,1)
            image.setAttribute('src', contestants[Math.floor(Math.random()* contestants.length)])
        }        
    }
})

const cac = document.querySelector('#cab')
cac.addEventListener('click', () => {
    const guy = image.getAttribute('src')
    console.log(guy)
    for (let i = 0; i < contestants.length; i++) {
        if (guy==contestants[i]) {
            contestants.splice(i,1)
            image.setAttribute('src', contestants[Math.floor(Math.random()* contestants.length)])
        }        
    }
})

const modal = document.getElementById("myModal");

const btn = document.getElementById("StartBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}