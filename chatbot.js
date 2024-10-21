const toggleChat = document.getElementById('toggle-chat');
const chatContainer = document.querySelector('.chat-container');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatBox = document.querySelector('.chat-box');


// Function to handle chat opening/closing
function toggleChatVisibility() {
  chatContainer.classList.toggle('active');
  const isChatOpen = chatContainer.classList.contains('active');
  closeChatOverlay.style.display = isChatOpen ? 'block' : 'none';
}

function generateBotResponse(userMessage) {
    // Implement your logic to analyze the user message and generate a response
    // For demonstration purposes, a simple response is generated based on the user's message
    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I am doing great, thanks for asking.',
        'what is your name': 'My name is ChatBot.',
        'default': 'I did not understand that. Please try again.',
        //more
      
        // Esports-related queries
        'popular games': 'Some popular esports games include League of Legends, Counter-Strike: Global Offensive, Dota 2, Fortnite, and Valorant.',
        'best players': 'Some of the best esports players include Faker (LoL), s1mple (CS:GO), and Miracle- (Dota 2).',
        'upcoming tournaments': 'You can find information about upcoming tournaments on sites like Liquipedia or Esports Observer.',
        'favorite game': 'What is your favorite esports game?',
        'who won the last world championship': 'The most recent world championship was won by [Team Name] in [Year].', // Replace with actual data
        'what is esports': 'Esports, short for electronic sports, is a form of competition that involves video games. It is a rapidly growing industry with millions of fans worldwide.',
        'how to become a pro gamer': 'Becoming a pro gamer requires dedication, skill, and practice. It also involves building a strong online presence and networking with other players.',
        'what is the prize pool for [tournament name]': 'The prize pool for [tournament name] is [amount].', // Replace with actual data
        'when is the next major tournament': 'The next major tournament is [tournament name] taking place on [date].', // Replace with actual data
        'who is the best player in [game name]': 'The best player in [game name] is often debated, but some popular contenders include [player names].',
        // ... add more specific queries and responses as needed
      };
    // You can use regular expressions, keywords, or NLP techniques (optional)
    const response = responses[userMessage.toLowerCase()] || responses['default'];
    return response;
    
    // Example using a simple keyword check:
    if (userMessage.includes("popular games")) {
      return "Some popular esports games include League of Legends, Counter-Strike: Global Offensive, Dota 2, Fortnite, and Valorant.";
    } else {
      return "Sorry, I don't quite understand your question. Can you rephrase it or ask something related to esports?";
    }
  }

// Function to send user messages
function sendMessage() {
  const userMessage = chatInput.value.trim();

  if (userMessage) {
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user');
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);
    const botResponse = generateBotResponse(userMessage);

    // Simulate bot response (replace with your actual logic)
    setTimeout(() => {
      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('message-bot', 'bot');
      botMessageElement.textContent = botResponse;
      chatBox.appendChild(botMessageElement);
    }, 1000); // Simulate a 1-second delay

    chatInput.value = ''; // Clear the input field
    chatBox.scrollTo({ top: chatBox.scrollHeight }); // Scroll to the bottom
  }
}

// Event listeners
toggleChat.addEventListener('change', toggleChatVisibility);
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Close chat overlay on click (optional)
const closeChatOverlay = document.querySelector('.close-chat-overlay');
closeChatOverlay.addEventListener('click', () => {
  toggleChat.checked = false; // Programmatically close the chat
});