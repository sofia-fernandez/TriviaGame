/* INSTRUCTIONS =====================================
You'll create a trivia form with multiple choice or true/false options (your choice).
The player will have a limited amount of time to finish the quiz.
The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
Don't let the player pick more than one answer per question.
Don't forget to include a countdown timer.
======================================================*/

//PSEUDO CODE =========================================
// 1. User is presented with a Start option.
// 2. When the user click Start: 
//    2.1 He is presented with a list of 10 questions.
//        2.1.1 User can view four options for each question.
//        2.1.2 User can only select one answer from the list of 4 options.
//        2.1.3 Only one answer is correct from the list of 4 options.
//        2.1.4 If user selects the correct answer, he gets a point under Correct Answers.
//        2.1.5 If user selects the wrong answer, he gets a point under Incorrect Answers
//        2.1.6 If user does not select an answer, he gets a point under Unanswered Questions.
//    2.2 A timer is set off (e.g., user has limited time to select answers).
//        2.2.1 The timer has a specific start time
//        2.2.2 The timer has a specific end time
//        2.2.3 Once the time reaches the end time, the user is presented to the Done page.
//    2.3 He is presented with a Done option at the bottom of the last question.
//        2.3.1 If user click Done (or it time runs out), 
//              he is presented with the Trivia Game results:
//              2.3.1.1 Correct Answers
//              2.3.1.2 Incorrect Answers
//              2.3.1.3 Unanswered Questions 

//DECLARE VARIABLES======================================
var timer;
var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;
//=======================================================

// 1. User is presented with a Start option.

$(document).ready(

// 2. When the user click Start:
// 2.1 He is presented with a list of 10 questions.
//Code Reference: https://stackoverflow.com/questions/15382281/how-to-hide-a-div-on-document-ready-and-then-call-it-dynamically-from-javascrip

	function startTrivia () {
		$('#start_button').click(function () {
			$('#main_content').show();
		});

// 2.2 A timer is set off (e.g., user has limited time to select answers).
// 2.2.1 The timer has a specific start time
// 2.2.2 The timer has a specific end time
// 2.2.3 Once the time reaches the end time, the user is presented to the Done page.


	}

// 2.1 He is presented with a list of 10 questions.
// 2.1.1 User can view four options for each question.
// 2.1.2 User can only select one answer from the list of 4 options.
// 2.1.3 Only one answer is correct from the list of 4 options.

// 2.1.4 If user selects the correct answer, he gets a point under Correct Answers.
// 2.1.5 If user selects the wrong answer, he gets a point under Incorrect Answers
// 2.1.6 If user does not select an answer, he gets a point under Unanswered Questions.



// 2.3 He is presented with a Done option at the bottom of the last question.
// 2.3.1 If user click Done (or it time runs out), he is presented with the Trivia Game results:
//       2.3.1.1 Correct Answers
//       2.3.1.2 Incorrect Answers
//       2.3.1.3 Unanswered Questions 

);