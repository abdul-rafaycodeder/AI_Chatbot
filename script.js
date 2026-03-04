const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', async () => {
    const message = userInput.value;
    userInput.value = ' '
    console.log(message)
})