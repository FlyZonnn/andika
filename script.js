const questions = [
    {
        question: "Siapa penemu bola lampu?",
        options: ["Thomas Alva Edison", "Leonardo Da Vinci", "Galileo Galilei", "Isaac Newton"],
        answer: "Thomas Alva Edison"
    },
    {
        question: "Revolusi Perancis terjadi kapan?",
        options: ["1789", "1804", "1905", "1815"],
        answer: "1789"
    },
    {
        question: "Fotosintesis pada tumbuhan itu apa?",
        options: ["Proses pembuatan makanan", "Proses penyerapan air", "Proses bernapas", "Proses reproduksi"],
        answer: "Proses pembuatan makanan"
    },
    {
        question: "1 ton sama dengan berapa kilogram?",
        options: ["1000 kg", "100 kg", "10 kg", "500 kg"],
        answer: "1000 kg"
    },
    {
        question: "Organ tubuh manusia yang berfungsi memompa darah apa?",
        options: ["Jantung", "Paru-paru", "Hati", "Ginjal"],
        answer: "Jantung"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');

    // Load current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    // Load options
    currentQuestion.options.forEach((option, index) => {
        const label = document.createElement('label'); // Bungkus input dan teks dengan label
        label.htmlFor = `option${index}`;

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.id = `option${index}`;
        radio.value = option;

        label.appendChild(radio); // Tambahkan input ke label
        label.appendChild(document.createTextNode(option)); // Tambahkan teks ke label

        optionsContainer.appendChild(label); // Tambahkan label ke container
    });
}

// Handle next button click
document.getElementById('next-button').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Silakan pilih jawaban terlebih dahulu!");
        return;
    }

    // Check answer
    if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    // Check if it's the last question
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('next-button').style.display = "none";
        document.getElementById('submit-button').style.display = "block";
    }
});

// Handle submit button click
document.getElementById('submit-button').addEventListener('click', () => {
    alert(`Kuis selesai! Skor kamu adalah ${score} dari ${questions.length}`);
    location.reload(); // Reload the page
});

// Load first question on page load
loadQuestion();
