let year = new Date().getFullYear();
let startYear = 2021
let text = "";
if(year == startYear){
    text = `<p class="pfooter">&copy; ${year} Sebastian Lein</p>`;
}
else{
    text = `<p class="pfooter">&copy; ${startYear} - ${year} Sebastian Lein</p>`;
}
document.getElementById('footer').innerHTML = text;