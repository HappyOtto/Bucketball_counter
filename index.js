let home = document.getElementById("home-score")
let homeCount = 0
function home1() {
     homeCount += 1
     home.innerText = homeCount
 }
 function home2() {
     homeCount += 2
     home.innerText = homeCount
 }
 function home3() {
     homeCount += 3
     home.innerText = homeCount
 }
 
 let guest = document.getElementById("guest-score")
 let guestCount = 0
 function guest1() {
     guestCount += 1
     guest.innerText = guestCount
 }
 function guest2() {
     guestCount += 2
     guest.innerText = guestCount
 }
 function guest3() {
     guestCount += 3
     guest.innerText = guestCount
 }
 
 let resetBtnHome = document.getElementById("home-score")
 let resetBtnGuest = document.getElementById("guest-score")
 function reset() {
     homeCount = 0
     guestCount = 0
     resetBtnHome.innerText = 0
     resetBtnGuest.innerText = 0
 }
