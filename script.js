const clickMeBtn = document.querySelector("button");
const score = document.querySelector("#score");
const submit = document.querySelector("#submit");

let storedScore = localStorage.getItem("score");
if (storedScore) {
    score.innerHTML = storedScore.split(' ')[0];
}

const nameinput = document.querySelector("#name");

const leaderboard = document.querySelector("#leaderboard");
const storedLeaderboard = localStorage.getItem("leaderboard");
if (storedLeaderboard) {
    leaderboard.innerHTML = storedLeaderboard;
}

clickMeBtn.addEventListener("click", () => {
    // alert("You clicked me!");
    score.innerHTML = parseInt(score.innerHTML) + 1
    localStorage.setItem("score", score.innerHTML + ' ' + nameinput.value);

});

submit.addEventListener("click", () => {
    if (nameinput.value) {
        leaderboard.innerHTML += '<li>' + nameinput.value + ' - ' + score.innerHTML + '</li>';
    }
    localStorage.setItem("leaderboard", leaderboard.innerHTML);
});


