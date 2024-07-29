document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const resultDisplay = document.getElementById('result');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let score = 0;
        const totalQuestions = 5;

        const answers = {
            q1: 'Eastern',
            q2: 'Backhand',
            q3: 'Continental',
            q4: 'Positioning',
            q5: 'Prepared stance'
        };

        const formData = new FormData(quizForm);

        for (const [question, answer] of formData.entries()) {
            if (answers[question] === answer) {
                score++;
            }
        }

        resultDisplay.textContent = `You scored ${score} out of ${totalQuestions}.`;

        if (score === totalQuestions) {
            resultDisplay.textContent += " Great job!";
        } else if (score >= totalQuestions / 2) {
            resultDisplay.textContent += " Good effort!";
        } else {
            resultDisplay.textContent += " Keep practicing!";
        }
    });
});
