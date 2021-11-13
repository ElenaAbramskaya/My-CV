const like = document.getElementById("feedback-like");
let counter = document.getElementById("feedback-count");

like.addEventListener('click', function() {


    function click() {
        let clicks = 0;
        let result;
        result = clicks + 1;

        return result;
    };

    counter.innerHTML = click();

});