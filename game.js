let currentQuestionIndex = 0;
let points = 0;
let currentDifficulty = null;
let filteredQuestions = [];

function showDifficultySelect() {
    playSound('buttonClick');
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('difficultySection').classList.remove('hidden');
}

function returnToMain() {
    playSound('buttonClick');
    document.getElementById('difficultySection').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');
}

function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz(difficulty) {
    playSound('buttonClick');
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    
    // Filter questions based on selected difficulty
    filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    
    if (filteredQuestions.length === 0) {
        alert('No questions available for this difficulty level!');
        return;
    }

    // Shuffle the filtered questions
    filteredQuestions = shuffleArray([...filteredQuestions]);
    
    // Limit to 10 questions per quiz
    filteredQuestions = filteredQuestions.slice(0, 10);

    document.getElementById('difficultySection').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = filteredQuestions[currentQuestionIndex];
    document.getElementById('questionText').innerText = question.question;
    document.getElementById('currentQuestion').innerText = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').innerText = filteredQuestions.length;

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = "true";  // Store the correct answer but don't style it yet
        } else {
            button.dataset.correct = "false";
        }
        // Remove any existing correct/incorrect styling
        button.style.background = 'linear-gradient(45deg, #3498db, #2980b9)';
        button.addEventListener('click', selectAnswer);
        document.getElementById('answerButtons').appendChild(button);
    });
}

function resetState() {
    const answerButtons = document.getElementById('answerButtons');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    if (correct === "true") {
        const pointsEarned = filteredQuestions[currentQuestionIndex].points;
        animatePoints(pointsEarned, e);
        playSound('correct');
    } else {
        playSound('incorrect');
    }

    Array.from(document.getElementById('answerButtons').children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    setTimeout(() => {
        if (currentQuestionIndex < filteredQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function animatePoints(pointsEarned, clickEvent) {
    // Create floating points element
    const pointsPopup = document.createElement('div');
    pointsPopup.className = 'points-popup';
    pointsPopup.textContent = `+${pointsEarned}`;
    
    // Position the popup where the click happened
    pointsPopup.style.left = `${clickEvent.clientX}px`;
    pointsPopup.style.top = `${clickEvent.clientY}px`;
    
    // Add to document
    document.body.appendChild(pointsPopup);
    
    // Update total points with animation
    setTimeout(() => {
        points += pointsEarned;
        const pointsDisplay = document.getElementById('pointsDisplay');
        pointsDisplay.textContent = points;
        // Also update avatar points display if it's visible
        const avatarPointsDisplay = document.getElementById('avatarPointsDisplay');
        if (avatarPointsDisplay) {
            avatarPointsDisplay.textContent = points;
        }
        pointsDisplay.parentElement.classList.add('updating');
        
        // Remove the updating class after animation
        setTimeout(() => {
            pointsDisplay.parentElement.classList.remove('updating');
        }, 500);
    }, 100);
    
    // Remove the popup after animation
    setTimeout(() => {
        document.body.removeChild(pointsPopup);
    }, 1000);
}

function playSound(type) {
    const sound = document.getElementById(type + 'Sound');
    if (sound) {
        sound.currentTime = 0; // Reset sound to start
        if (type === 'buttonClick') {
            sound.volume = 0.3;  // Lower volume for click
            // Stop the sound after 50ms to make it shorter
            setTimeout(() => {
                sound.pause();
                sound.currentTime = 0;
            }, 50);
        }
        sound.play().catch(error => {
            console.log("Audio playback failed:", error);
        });
    }
}

function setStatusClass(element, correct) {
    if (correct === "true") {
        element.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';  // Green gradient for correct
    } else {
        element.style.background = 'linear-gradient(45deg, #e74c3c, #c0392b)';  // Red gradient for incorrect
    }
}

function endQuiz() {
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');
}

function showAvatarCustomization() {
    playSound('buttonClick');
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('avatarSection').classList.remove('hidden');
    // Update available points display
    document.getElementById('avatarPointsDisplay').innerText = points;
}

function backToMenu() {
    playSound('buttonClick');
    // Hide both quiz and avatar sections
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('avatarSection').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');
}

// Initialize points display
document.getElementById('pointsDisplay').innerText = points;

// Add click sound to all buttons except answer buttons
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons that aren't answer buttons or don't already have click handlers
    const buttons = document.querySelectorAll('button:not(.answer-btn)');
    buttons.forEach(button => {
        if (!button.hasAttribute('onclick')) {
            button.addEventListener('click', () => playSound('buttonClick'));
        }
    });
});

function checkAnswer(isCorrect, button) {
    if (isCorrect) {
        button.style.backgroundColor = '#27ae60';
        // Create confetti at button's position
        const rect = button.getBoundingClientRect();
        createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
        updatePoints(currentQuestion.points);
        playSound('correct');
    } else {
        button.style.backgroundColor = '#c0392b';
        shakeElement(button);
        playSound('incorrect');
    }
    
    // ... rest of your existing code ...
} 