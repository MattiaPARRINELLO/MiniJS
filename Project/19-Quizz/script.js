(function() {
  var questions = [{ //var of questions
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }];

  var questionCounter = 0; //var of question counter
  var selections = []; //slections
  var quiz = $('#quiz'); //quiz element

  displayNext(); //calls the displayNext function

  $('#next').on('click', function (e) { //when the next button is clicked
    e.preventDefault(); //prevents the default action
    if(quiz.is(':animated')) { //checks if the quiz is animated      
      return false; //returns false
    }

    choose(); //calls the choose function

    if (isNaN(selections[questionCounter])) { //checks if the selection is a number
      alert('Please make a selection!'); //alerts the user
    } else { //if the selection is a number
      questionCounter++; //increments the question counter

      displayNext(); //calls the displayNext function
    }
  });

  $('#prev').on('click', function (e) { //when the previous button is clicked
    e.preventDefault(); //prevents the default action

    if(quiz.is(':animated')) { //checks if the quiz is animated
      return false; //returns false
    }

    choose(); //calls the choose function

    questionCounter--; //decrements the question counter

    displayNext(); //calls the displayNext function
  });

  $('#start').on('click', function (e) { //when the start button is clicked
    e.preventDefault(); //prevents the default action

    if(quiz.is(':animated')) { //checks if the quiz is animated
      return false; //returns false
    }

    questionCounter = 0; //sets the question counter to 0
    selections = []; //sets the selections to an empty array

    displayNext(); //calls the displayNext function

    $('#start').hide(); //hides the start button
  });

  $('.button').on('mouseenter', function () { //when the mouse enters a button
    $(this).addClass('active'); //adds the active class
  });

  $('.button').on('mouseleave', function () { //when the mouse leaves a button
    $(this).removeClass('active'); //removes the active class
  });

  function createQuestionElement(index) { //function to create the question element
    var qElement = $('<div>', { //creates a div element

      id: 'question' //sets the id to question
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>'); //creates a header element
    qElement.append(header); //appends the header to the div element

    var question = $('<p>').append(questions[index].question); //creates a paragraph element and appends the question to it
    qElement.append(question); //appends the question to the div element

    var radioButtons = createRadios(index); //calls the createRadios function
    qElement.append(radioButtons); //appends the radio buttons to the div element

    return qElement; //returns the div element
  }

  function createRadios(index) { //function to create the radio buttons

    var radioList = $('<ul>'); //creates a ul element
    var item; //var of item
    var input = ''; //input

    for (var i = 0; i < questions[index].choices.length; i++) { //for loop to iterate through the choices
      item = $('<li>'); //creates a li element
      input = '<input type="radio" name="answer" value=' + i + ' />'; //creates an input element
      input += questions[index].choices[i]; //appends the choices to the input element

      item.append(input); //appends the input to the li element
      radioList.append(item); //appends the li element to the ul element
    }

    return radioList; //returns the ul element
  }

  function choose() { //function to choose the answer
    selections[questionCounter] = +$('input[name="answer"]:checked').val(); //sets the selections to the value of the checked input
  }

  function displayNext() { //function to display the next question
    quiz.fadeOut(function() { //fades out the quiz

      $('#question').remove(); //removes the question element

      if(questionCounter < questions.length){ //checks if the question counter is less than the length of the questions array
        var nextQuestion = createQuestionElement(questionCounter); //calls the createQuestionElement function
        quiz.append(nextQuestion).fadeIn(); //appends the next question to the quiz and fades it in

        if (!(isNaN(selections[questionCounter]))) { //checks if the selection is a number
          $('input[value='+selections[questionCounter]+']').prop('checked', true); //checks the radio button with the value of the selection
        }

        if(questionCounter === 1){ //checks if the question counter is 1
          $('#prev').show(); //shows the previous button
        } else if(questionCounter === 0){  //checks if the question counter is 0
          $('#prev').hide(); //hides the previous button
          $('#next').show(); //shows the next button
        }

      }else { //if the question counter is greater than the length of the questions array
        var scoreElem = displayScore(); //calls the displayScore function
        quiz.append(scoreElem).fadeIn(); //appends the score to the quiz and fades it in

        $('#next').hide(); //hides the next button
        $('#prev').hide(); //hides the previous button
        $('#start').show(); //shows the start button
      }
    });
  }

  function displayScore() { //function to display the score
    var score = $('<p>',{id: 'question'}); //creates a p element
    var numCorrect = 0; //var of numCorrect

    for (var i = 0; i < selections.length; i++) { //for loop to iterate through the selections
      if (selections[i] === questions[i].correctAnswer) { //checks if the selection is equal to the correct answer
        numCorrect++; //increments the numCorrect
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' + questions.length + ' right!!!'); //appends the score to the p element
    return score; //returns the p element
  }
})();