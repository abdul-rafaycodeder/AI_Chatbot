const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


function addMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add('message', className);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTopv = chatbox.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("message", "bot-message");
    typingDiv.textContent = "Ai likh raha hai";
    chatbox.appendChild(typingDiv);
    chatbox.scrollTo = chatbox.scrollHeight;
    return typingDiv;
}


sendBtn.addEventListener('click', async () => {
    const message = userInput.value;
    if (message === "") return;
    userInput.value = ' ';
    addMessage(message, "user-message");

    const typingDiv = showTyping();

    const botReplay = "Replay";
    typingDiv.remove();
    addMessage(botReplay, "bot-message");

    localStorage.setItem('chatHistory', chatbox.innerHTML)
})

