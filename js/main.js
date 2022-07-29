let result = document.querySelector("#result"),
    minus = document.querySelector("#minus"),
    reset = document.querySelector("#reset"),
    plus = document.querySelector("#plus");

minus.addEventListener('click', function () {
result.textContent--
})
reset.addEventListener('click', function () {
    location.reload();
})
plus.addEventListener('click', function () {

    result.textContent++
     if (result.textContent == 5) {
         document.body.style.backgroundImage = 'url(https://img.freepik.com/premium-vector/you-win-lettering-pop-art-text-banner_185004-60.jpg)';
         console.log("dfg")
     }


})