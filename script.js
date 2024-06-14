document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const quizOutput = document.getElementById('quiz-output');
    const questions = [];

    // Predefined questions about Indian history
    const predefinedQuestions = [
        {
            question: "What was Motilal Nehru's profession?",
            options: ["Lawyer", "Businessman", "Teacher", "None of the above"]
        },
        {
            question: "Who was the first Prime Minister of independent India?",
            options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Dr. B.R. Ambedkar"]
        },
        {
            question: "Which empire did Ashoka belong to?",
            options: ["Maurya Empire", "Gupta Empire", "Mughal Empire", "Chola Empire"]
        },
        {
            question: "In which year did India gain independence from British rule?",
            options: ["1942", "1945", "1947", "1950"]
        },
        {
            question: "Who wrote the Indian national anthem?",
            options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhas Chandra Bose"]
        },
        {
            question: "The 'Jallianwala Bagh Massacre' took place in which city?",
            options: ["Delhi", "Mumbai", "Amritsar", "Kolkata"]
        },
        {
            question: "Which ancient text is considered the 'Constitution of the Mauryan Empire'?",
            options: ["Arthashastra", "Manusmriti", "Ramayana", "Mahabharata"]
        },
        {
            question: "Who was the founder of the Mughal Empire in India?",
            options: ["Akbar", "Humayun", "Babur", "Aurangzeb"]
        },
        {
            question: "Which movement was led by Mahatma Gandhi to protest the salt tax?",
            options: ["Quit India Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Swadeshi Movement"]
        },
        {
            question: "Who was the first Governor-General of independent India?",
            options: ["Lord Mountbatten", "Rajendra Prasad", "C. Rajagopalachari", "Jawaharlal Nehru"]
        },
        {
            question: "Which battle marked the beginning of British rule in India?",
            options: ["Battle of Plassey", "Battle of Panipat", "Battle of Buxar", "Battle of Haldighati"]
        }
    ];

    questions.push(...predefinedQuestions);

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const question = document.getElementById('question').value;
        const options = [
            quizForm.option1.value,
            quizForm.option2.value,
            quizForm.option3.value,
            quizForm.option4.value
        ];
        const answer = document.getElementById('answer').value;

        const newQuestion = {
            question,
            options,
            answer
        };

        questions.push(newQuestion);
        displayQuiz();

        quizForm.reset();
    });

    function displayQuiz() {
        quizOutput.innerHTML = '';

        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionTitle = document.createElement('h3');
            questionTitle.textContent = `Question ${index + 1}: ${q.question}`;
            questionDiv.appendChild(questionTitle);

            q.options.forEach((option, i) => {
                const optionP = document.createElement('p');
                optionP.textContent = `Option ${i + 1}: ${option}`;
                questionDiv.appendChild(optionP);
            });

            quizOutput.appendChild(questionDiv);
        });
    }

    displayQuiz();  // Display predefined questions
});
