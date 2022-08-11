const btn = document.querySelector('.button');
const popup = document.querySelector(".main__creator--popup");
let creator = document.querySelector(".main__creator");
    
btn.addEventListener('click', function() {
    popup.classList.toggle('show');
    btn.classList.toggle("top");
});




