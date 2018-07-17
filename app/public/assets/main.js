$(document).ready(function(){
    // Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

    $("#surveyform").on("submit", function () {
        //loop through all of selects and store the value of the selected option of each select in an array
// this array is the scores for the users object
// this user object will also need it's photo url and it's users name
    });

    function showQuestions () {
        for (var i=0; i<questionsArray.length; i++) {
            //use jquery to make a select and use questionsArray[i] as it's text
            //loop through choiceArray and use jquery to make a new option element. text & value of each option will be choiceArray[j]
            //inside this loop (but outside and after nested loop) append your select to your div element with ID of questions

            var questionHTML = getQuestionHTML(questionsArray[i])
        
            $("#questions").append(questionHTML);
        }
    }

    function getQuestionHTML(question) {
        var questionHTML = $("<div>");
       var questionLabel = $("<p>");
        questionHTML.text(question);
        questionHTML.append(questionLabel);

        var questionSelect = $("<select>");
        for (var j=0; j<choiceArray.length; j++) {
            var choiceOption = $("<option>");
            choiceOption.text(choiceArray[j]);
            choiceOption.val(choiceArray[j]);
            questionSelect.append(choiceOption);
        }

        questionHTML.append(questionSelect);

       return questionHTML;
    }

    var questionsArray = ['I am a worrier', 'I make friends easily', 'I have a vivid imagination', 'I trust others', 'I complete tasks successfully', 'I get angry easily', 'I really enjoy large parties and gatherings', 'I think art is important', 'I like things to be neat', 'I love to help others'];
    var choiceArray = [1,2,3,4,5];

    showQuestions()

//NO CODE BELOW THIS LINE
});