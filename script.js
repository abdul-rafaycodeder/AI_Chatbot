const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


function addMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add('message', className);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTopv = chatbox.scrollHeight
}


sendBtn.addEventListener('click', async () => {
    const message = userInput.value;
    userInput.value = ' ';
    addMessage(message, "user-message");
})

