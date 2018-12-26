function check() {
    var questionOne = document.Quiz.questionOne.value;
    var questionTwo = document.Quiz.questionTwo.value;
    var questionThree = document.Quiz.questionThree.value;
    var questionFour = document.Quiz.questionFour.value;
    var questionFive = document.Quiz.questionFive.value;
    var questionSix = document.Quiz.questionSix.value;
    var questionSeven = document.Quiz.questionSeven.value;
    var questionEight = document.Quiz.questionEight.value;
    var questionNine = document.Quiz.questionNine.value;
    var questionTen = document.Quiz.questionTen.value;
    var right = 0;


    if (questionOne == "correct") {
        right = right + 10;
    };
    if (questionTwo == "correct") {
        right = right + 10;
    };
    if (questionThree == "correct") {
        right = right + 10;
    };
    if (questionFour == "correct") {
        right = right + 10;
    };
    if (questionFive == "correct") {
        right = right + 10;
    };
    if (questionSix == "correct") {
        right = right + 10;
    };
    if (questionSeven == "correct") {
        right = right + 10;
    };
    if (questionEight == "correct") {
        right = right + 10;
    };
    if (questionNine == "correct") {
        right = right + 10;
    };
    if (questionTen == "correct") {
        right = right + 10;
    };

    document.getElementById("fifth-p").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "THIS IS YOUR MARKS IN PERCENTAGE: " + right + "%";
    $(".container").fadeOut();

};
