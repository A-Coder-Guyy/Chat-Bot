let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbot() {

    let userMsg = userInputEl.value;

    // Creating and appending the container element div
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // Creating and appending the span element
    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplyFromChatbot();

}

function getReplyFromChatbot() {


    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

    // Creating and appending the container element div
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // Creating and appending the span element
    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);

}