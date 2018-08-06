$(document).ready(function () {

    //set up on click event to compare scores and generate best friend
    $("#surveyform").on("submit", function (event) {
        event.preventDefault();
        var form = event.target;
        var friend = {
            friendName: $(form.name).val(),
            friendPhoto: $(form.photo).val(),
            friendScores: getScores($(form).find(".question-select"))
        }
        $.ajax({
            dataType: "json",
            method: "POST",
            url: "/api/friends",
            data: friend
        })
            //show modal with best friend data
            .done(function (result) {
                event.preventDefault();
                $('#theModal').modal('toggle');
                $("#bestFriendPhoto").append(result.friendPhoto);
                $("bestFriendPhoto").attr("src", result.friendPhoto);
                $("#results").append(result.friendName);

                console.log(result);
            });
    });
    //append questions to html
    function showQuestions() {
        for (var i = 0; i < questionsArray.length; i++) {
            var questionHTML = getQuestionHTML(questionsArray[i], i + 1)
            $("#questions").append(questionHTML);
        }
    }
    // get user input
    function getScores(questionElements) {
        var scores = [];

        for (let i = 0; i < questionElements.length; i++) {
            var select = questionElements[i];
            var score = parseInt($(select).find(":selected").val());
            scores.push(score);
        }
        return scores
    }
    //generate question html
    function getQuestionHTML(question, questionNumber) {
        var questionHTML = $("<div>");
        var questionLabel = $("<p>");
        questionHTML.text(question);
        questionHTML.append(questionLabel);

        var questionSelect = $("<select>");
        questionSelect.addClass("question-select");
        //generate option html
        for (var j = 0; j < choiceArray.length; j++) {
            var choiceOption = $("<option>");
            choiceOption.text(choiceArray[j]);
            choiceOption.val(choiceArray[j]);
            questionSelect.append(choiceOption);
        }

        questionHTML.append(questionSelect);

        return questionHTML;
    }
    //hold questions
    var questionsArray = ['I am a worrier', 'I make friends easily', 'I have a vivid imagination', 'I trust others', 'I complete tasks successfully', 'I get angry easily', 'I really enjoy large parties and gatherings', 'I think art is important', 'I like things to be neat', 'I love to help others'];
    var choiceArray = [1, 2, 3, 4, 5];

    showQuestions()


    //NO CODE BELOW THIS LINE
});