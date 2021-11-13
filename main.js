const like = document.getElementById("feedback-like");
let counter = document.getElementById("feedback-count");

like.addEventListener('click', function() {
    let clicks = 0;

    if (counter.innerHTML !== '') {
        clicks = Number(counter.innerHTML);
    }

    counter.innerHTML = clicks + 1;
});