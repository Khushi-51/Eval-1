// Exported toggleChatVisibility function
export function toggleChatVisibility(toggleChat, chatContainer, closeChatOverlay) {
  chatContainer.classList.toggle('active');
  const isChatOpen = chatContainer.classList.contains('active');
  closeChatOverlay.style.display = isChatOpen ? 'block' : 'none';
}

// Exported generateBotResponse function
export function chatbotResponse(userMessage) {
  const responses = {
    'hello': 'Hi there!',
    'how are you': 'I am doing great, thanks for asking.',
    'what is your name': 'My name is ChatBot.',
    'default': 'I did not understand that. Please try again.',
    'popular games': 'Some popular esports games include League of Legends, CS:GO, Dota 2, Fortnite, and Valorant.',
    'best players': 'Some of the best esports players include Faker (LoL), s1mple (CS:GO), and Miracle- (Dota 2).',
    'upcoming tournaments': 'You can find information about upcoming tournaments on sites like Liquipedia or Esports Observer.',
    'favorite game': 'What is your favorite esports game?',
    'who won the last world championship': 'The most recent world championship was won by [Team Name] in [Year].',
    'what is esports': 'Esports is competitive video gaming, a rapidly growing industry with millions of fans worldwide.',
    'how to become a pro gamer': 'Becoming a pro gamer requires dedication, skill, and practice, along with networking and building a strong online presence.',
  };

  // Return response based on user message
  return responses[userMessage.toLowerCase()] || responses['default'];
}

// Exported sendMessage function
export function sendMessage(chatInput, chatBox, chatbotResponse) {
  const userMessage = chatInput.value.trim();

  if (userMessage) {
    // Display user's message
    displayMessage(chatBox, 'user', userMessage);
    chatInput.value = ''; // Clear input field

    // Generate bot response
    const botResponse = chatbotResponse(userMessage);

    // Display bot response after a delay
    setTimeout(() => {
      displayMessage(chatBox, 'bot', botResponse);
    }, 1000);
  }
}

// Exported displayMessage function
export function displayMessage(chatBox, sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}
