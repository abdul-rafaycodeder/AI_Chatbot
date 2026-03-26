const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// ⚠️ NOT SAFE FOR PRODUCTION
const API_KEY = "AIzaSyC1TNFo4vwPnyPodOkVsY-9WBGdcJgxQuY";

// Load chat history
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
    typingDiv.textContent = "AI is replying...";
    chatbox.appendChild(typingDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
    return typingDiv;
}

// 🔥 Gemini API Call


// const API$KEY = "AIzaSyC1TNFo4vwPnyPodOkVsY-9WBGdcJgxQuY";

async function getBotApiKey(userMessage) {
    try {
        const response = await fetch(
            // `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API$KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: userMessage }]
                        }
                    ]
                })
            }
        );

        const data = await response.json();
        console.log(data);

        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        } else if (data.error) {
            return "API Error: " + data.error.message;
        } else {
            return "No response from AI.";
        }

    } catch (error) {
        console.error(error);
        return "Connection error.";
    }
}

sendBtn.addEventListener('click', async () => {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage(message, "user-message");
    userInput.value = "";

    const typingDiv = showTyping();

    const botReply = await getBotApiKey(message);

    typingDiv.remove();
    addMessage(botReply, "bot-message");

    localStorage.setItem('chatHistory', chatbox.innerHTML);
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});