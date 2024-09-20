document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const micButton = document.getElementById('micButton');
    const messageSound = document.getElementById('messageSound');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    micButton.addEventListener('click', startSpeechRecognition);

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            fetchResponse(message);
            userInput.value = '';
        }
    }

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = text;

        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        if (sender === 'user') {
            addTypingIndicator();
        } else if (sender === 'bot') {
            playMessageSound();
        }
    }

    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function playMessageSound() {
        messageSound.play().catch(error => console.error('Error playing sound:', error));
    }

    function fetchResponse(message) {
        setTimeout(() => {
            fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message }),
            })
            .then(response => response.json())
            .then(data => {
                removeTypingIndicator();
                addMessage('bot', data.response);
            })
            .catch(error => {
                console.error('Error:', error);
                removeTypingIndicator();
                addMessage('bot', 'Sorry, I encountered an error. Please try again.');
            });
        }, 1000 + Math.random() * 2000);
    }

    function startSpeechRecognition() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onstart = () => {
                micButton.classList.add('listening');
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                userInput.value = transcript;
                sendMessage();
            };

            recognition.onend = () => {
                micButton.classList.remove('listening');
            };

            recognition.start();
        } else {
            alert('Speech recognition is not supported in this browser.');
        }
    }
});