document.addEventListener('DOMContentLoaded', () => {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const feedbackElement = document.getElementById('feedback');

    quizOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const chosenAnswer = event.target.dataset.answer;
            const correctAnswer = 'filtro'; // Resposta correta para a pergunta do quiz

            if (chosenAnswer === correctAnswer) {
                feedbackElement.textContent = 'Parabéns! Resposta correta.';
                feedbackElement.className = 'correct';
            } else {
                feedbackElement.textContent = 'Ops! Resposta incorreta. Tente novamente.';
                feedbackElement.className = 'wrong';
            }
            feedbackElement.classList.remove('hidden'); // Mostra o feedback
        });
    });
});
