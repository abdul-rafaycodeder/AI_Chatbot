// const chatbox = document.getElementById('chat-box');
// const userInput = document.getElementById('user-input');
// const sendBtn = document.getElementById('send-btn');


// function addMessage(message, className) {
//     const messageDiv = document.createElement("div");
//     messageDiv.classList.add('message', className);
//     messageDiv.textContent = message;
//     chatbox.appendChild(messageDiv);
//     chatbox.scrollTopv = chatbox.scrollHeight;
// }

// function showTyping() {
//     const typingDiv = document.createElement("div");
//     typingDiv.classList.add("message", "bot-message");
//     typingDiv.textContent = "Ai likh raha hai";
//     chatbox.appendChild(typingDiv);
//     chatbox.scrollTo = chatbox.scrollHeight;
//     return typingDiv;
// }


// sendBtn.addEventListener('click', async () => {
//     const message = userInput.value;
//     if (message === "") return;
//     userInput.value = ' ';
//     addMessage(message, "user-message");

//     const typingDiv = showTyping();

//     const botReplay = "Replay";
//     typingDiv.remove();
//     addMessage(botReplay, "bot-message");

//     localStorage.setItem('chatHistory', chatbox.innerHTML)
// })

// userInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') sendBtn.click();
// })

//--------------------------------------------------------------------------- chat gpt -----------------------------------------//

const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


// Load chat history on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
        chatbox.innerHTML = savedChat;
        chatbox.scrollTop = chatbox.scrollHeight;
    }
});


function addMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add('message', className);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("message", "bot-message");
    typingDiv.textContent = "Ai is replying...";
    chatbox.appendChild(typingDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
    return typingDiv;
}

function getBotApiKey(params) {
    
}


sendBtn.addEventListener('click',async () => {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage(message, "user-message");
    userInput.value = "";   // correct empty

    const typingDiv = showTyping();

    setTimeout(() => {
        typingDiv.remove();
        const botReply = await getBotApiKey();   // Bot response
        addMessage(botReply, "bot-message");

        // Save chat after bot reply
        localStorage.setItem('chatHistory', chatbox.innerHTML);

    }, 1000);
});


userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

