const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


function addMessage (message, className){

}


sendBtn.addEventListener('click', async () => {
    const message = userInput.value;
    userInput.value = ' ';
    addMessage(message, "user-message")
})

