import './JS/page-loader.js';
import './JS/chatbot.js';
import { chatbotResponse } from './JS/chatbot.js';
import './JS/chatbot.js';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
  
    const toggleChat = () => {
      setIsChatOpen(!isChatOpen);
    };
  
    const handleInputChange = (event) => {
      setMessage(event.target.value);
    };
  
    const sendMessage = (event) => {
      event.preventDefault();
      if (message.trim()) {
        // Add user's message to the messages array
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'user', text: message },
        ]);
        setMessage(''); // Clear input field
  
        // Simulate bot response (you can replace this with actual bot response logic)
        const botResponse = chatbotResponse(message);
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'bot', text: botResponse },
          ]);
        }, 1000);
      }
    };
  

    return (
    <>
    <div id="loader">
        <h2 className="counter">0</h2>
        <div className="overlayy">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"><h1 className="yo">E</h1></div>
        <div className="bar"><h1 className="yo">L</h1></div>
        <div className="bar"><h1 className="yo">Y</h1></div>
        <div className="bar"><h1 className="yo">S</h1></div>
        <div className="bar"><h1 className="yo">I</h1></div>
        <div className="bar"><h1 className="yo">U</h1></div>
        <div className="bar"><h1 className="yo">M</h1></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
    </div>
        <header>  
            <div className="logo">
                <img src="/images/esports_logo_transparent.png"/>
            <h1 className="h1">Elysium</h1>
        </div>
        <nav>
            <div className="nav-b">
                <ul>
                <li><a href="/HTML/index.html" target="_blank" rel="noopener noreferrer">Home</a></li>
                <li><a href="/HTML/leaderboard_1.html" target="_blank" rel="noopener noreferrer">Leaderboard</a></li>
                <li><a>Community</a>
                    <ul>
                        <li><a>Esports</a></li>
                        <li><a href="/HTML/community.html" target="_blank" rel="noopener noreferrer">Game Updates</a></li>
                        <li><a href="/HTML/mediakit.html" target="_blank" rel="noopener noreferrer">Media Kit</a></li>
                    </ul>
                </li>
                <li><a href="/HTML/index_7.html" target="_blank" rel="noopener noreferrer">Merch</a></li>
                <li><a href="/HTML/Profile.html" target="_blank" rel="noopener noreferrer">Account</a></li>
            </ul>
        </div>
    </nav>
        <div className="nav-side">
        <div className="login">
            <a href="/HTML/loginmain.html" target="_blank" rel="noopener noreferrer">
                
                <div className="button-container">
                    <div className="icon"></div>
                    <div className="play-button">
                        Login
                        {/* <!-- <img src="/images/esports_logo_transparent.png" alt="Elysium" width="18"> --> */}
                    </div>
                </div>
            </a>
        </div>
        </div>
    </header>
    <main>
        <h1><b>ESPORTS</b><sup>[003]</sup></h1>
        <div id="slideshow">
            <div className="slide-number">
                <div className="caption">
                    VAIL VRML SEASON 
                    STARTING JANUARY
                    15th 2024
                    <br/>
                    <br/>
                    <a href="/HTML/rules.html" target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="slide-wrapper">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
            </div>
        </div>        
        
        <div className="brands">
            <div className="items">
                <div className="item"><img src="https://api.aexlab.com/uploads/CB_91cdfc1265.webp" height="75px"/></div>
                <div className="item"><img src="https://api.aexlab.com/uploads/IVRL_1_5cc19463ec.webp" height="75px"/></div>
                <div className="item"><img src="https://api.aexlab.com/uploads/IVRL_7170a139d0.webp" height="75px"/></div>
                <div className="item"><img src="https://api.aexlab.com/uploads/Liquid_67c76563f6.webp" height="75px"/></div>
                <div className="item"><img src="https://api.aexlab.com/uploads/Li_V_75fa5918fd.webp" height="75px"/></div>
                <div className="item"><img src="https://api.aexlab.com/uploads/Olen_a99b3f9dba.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Smash_3d225c002d.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Superbluer_247b79909f.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/VRML_77b126d233.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Warner_9daeb0f1f9.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/CB_91cdfc1265.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/IVRL_1_5cc19463ec.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/IVRL_7170a139d0.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Liquid_67c76563f6.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Li_V_75fa5918fd.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Olen_a99b3f9dba.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Smash_3d225c002d.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Superbluer_247b79909f.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/VRML_77b126d233.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/VRML_77b126d233.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Warner_9daeb0f1f9.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.co m/uploads/CB_91cdfc1265.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/IVRL_1_5cc19463ec.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/IVRL_7170a139d0.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Liquid_67c76563f6.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Li_V_75fa5918fd.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Olen_a99b3f9dba.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Smash_3d225c002d.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Superbluer_247b79909f.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/VRML_77b126d233.webp" height="75px"/></div>
            <div className="item"><img src="https://api.aexlab.com/uploads/Warner_9daeb0f1f9.webp" height="75px"/></div>
        </div>
        </div>
        <div className="games">
            <h1>GAMES</h1>
            <div className="cards">
            <a href="HTML/index 2.html" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src="/images/valorant.webp" alt="Valorant" />
                        <figcaption>Valorant</figcaption>
                    </div>
            </a>
            <a href="/HTML/index 1.html" target="_blank" rel="noopener noreferrer">
                <div className="card">
                    <img src="/images/tekken-7.webp"/>
                    <figcaption>Tekken 7</figcaption>
                </div>
            </a>
            <a href="/HTML/index 3.html" target="_blank" rel="noopener noreferrer">
                
                <div className="card">
                    <img src="/images/street fighter 6.webp"/>
                    <figcaption>Street Fighter 6</figcaption>
                </div>
            </a>
            <div className="card">
                <img src="/images/pubg.webp"/>
                <figcaption>PUBG: Battlegrounds</figcaption>
            </div>
            <div className="card">
                <img src="/images/counter strike.webp"/>
                <figcaption>Counter Strike</figcaption>
            </div>
            <div className="card">
                <img src="/images/fifa 23.webp"/>
                <figcaption>FIFA 23</figcaption>
            </div>
            <div className="card">
                <img src="/images/mortal combat II.webp"/>
                <figcaption>Mortal Combat II</figcaption>
            </div>
            <div className="card">
                <img src="/images/road of valor empire.webp"/>
                <figcaption>Road of Valor Empire</figcaption>
            </div>
            <div className="card">
                <img src="/images/EA FC mobile.webp"/>
                <figcaption>EA FC Mobile</figcaption>
            </div>
            <div className="card">
                <img src="/images/mortal combat II.webp"/>
                <figcaption>Mortal Combat II</figcaption>
            </div>
            <div className="card">
                <img src="/images/BGMI.webp"/>
                <figcaption>BGMI</figcaption>
            </div>
            <div className="card">
                <img src="/images/counter-strike 2.webp"/>
                <figcaption>Counter Strike 2</figcaption>
            </div>
            <div className="card">
                <img src="/images/rocket league.webp"/>
                <figcaption>Rocket League</figcaption>
            </div>
        </div>
        </div>
        <div className="events">
            <p>WE ARE VR ESPORTS</p>
            <p>EVENTS</p>
            <p>WE ARE VR ESPORTS</p>
        </div>
        <div className="eventss">
            <a href="/HTML/event1.html" target="_blank" rel="noopener noreferrer">
                <div className="ev">
                    <img src="/images/s1.webp"/>
                    <div className="caption">
                        VAIL VRML SEASON <br/>
                        STARTING JANUARY 
                        <br/>
                        15th 2024
                        <h6>DATE: 16_FEB_2024</h6>
                    </div>
                </div>
            </a>
            <a href="/HTML/event2.html" target="_blank" rel="noopener noreferrer">
                <div className="ev">
                    <img src="/images/s2.webp"/>
                    <div className="caption">
                        VAIL VRML SEASON <br/>
                        STARTING JANUARY 
                        <br/>
                        15th 2024
                        <h6>DATE: 16_FEB_2024</h6>
                    </div>
                </div>
            </a>
            <a href="/HTML/event3.html" target="_blank" rel="noopener noreferrer">
                <div className="ev">
                    <img src="/images/s3.webp"/>
                    <div className="caption">
                        VAIL VRML SEASON <br/>
                        STARTING JANUARY 
                        <br/>
                        15th 2024
                        <h6>DATE: 16_FEB_2024</h6>
                    </div>
                </div>
            </a>
            <a href="/HTML/event4.html" target="_blank" rel="noopener noreferrer">
                <div className="ev">
                    <img src="/images/esports3.jpg"/>
                    <div className="caption">
                        VAIL VRML SEASON <br/>
                        STARTING JANUARY 
                        <br/>
                        15th 2024
                        <h6>DATE: 16_FEB_2024</h6>
                    </div>
                </div>
            </a>  
        </div>
        <div className="tournaments">
            <h1>TOURNAMENTS</h1>
            <div className="nav">
                <a href="">Ongoing </a>/
                <a href="">Upcoming </a>/
                <a href="">Past </a>
            </div>
            <div className="tours">
                <div className="custom-search-bar">
                    <select id="customGameSelect">
                        <option value="" disabled selected>Select Game</option>
                        <option value="1">Game 1</option>
                        <option value="2">Game 2</option>
                        {/* <!-- Add more games here --> */}
                    </select>
                    <input type="text" id="customSearchByName" placeholder="Search by name"/>
                </div>
                
                <div className="custom-slider-container">
                    <div className="custom-slider">
                        {/* <!-- Slide 1 --> */}
                         <a href="/HTML/index 1.html" target="_blank" rel="noopener noreferrer">
                             <div className="custom-slide">
                                 <div className="custom-card">
                                     <img src="images/tour2.webp" alt="Event Image"/>
                                     <div className="custom-event-info">
                                         <h3>TEC SHOWDOWN SERIES-SEASON 4</h3>
                                         <p>Game Mode: Single Elimination</p>
                                         <p>Platform: <span>&#128187;</span></p>
                                         <p><span>&#127942;</span> INR 1,00,000</p>
                                         <p><span>&#128101;</span> 5 of 128</p>
                                         <button className="custom-status-btn custom-upcoming">UPCOMING</button>
                                         <p className="custom-event-date">5 Sept 2024</p>
                                        </div>
                                    </div>
                            </div>
                        </a>
                        
                        {/* <!-- Slide 2 --> */}
                        <div className="custom-slide">
                            <div className="custom-card">
                                <img src="images/tour2.webp" alt="Event Image"/>
                                <div className="custom-event-info">
                                    <h3>TEC SHOWDOWN SERIES-SEASON 4</h3>
                                    <p>Game Mode: Single Elimination</p>
                                    <p>Platform: <span>&#128187;</span></p>
                                    <p><span>&#127942;</span> INR 1,00,000</p>
                                    <p><span>&#128101;</span> 5 of 128</p>
                                    <button className="custom-status-btn custom-upcoming">UPCOMING</button>
                                    <p className="custom-event-date">5 Sept 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="custom-slide">
                            <div className="custom-card">
                                <img src="/images/tour3.webp" alt="Event Image"/>
                                <div className="custom-event-info">
                                    <h3>TEC SHOWDOWN SERIES-SEASON 4</h3>
                                    <p>Game Mode: Single Elimination</p>
                                    <p>Platform: <span>&#128187;</span></p>
                                    <p><span>&#127942;</span> INR 1,00,000</p>
                                    <p><span>&#128101;</span> 5 of 128</p>
                                    <button className="custom-status-btn custom-upcoming">UPCOMING</button>
                                    <p className="custom-event-date">5 Sept 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="custom-slide">
                            <div className="custom-card">
                                <img src="/images/tour3.webp" alt="Event Image"/>
                                <div className="custom-event-info">
                                    <h3>TEC SHOWDOWN SERIES-SEASON 4</h3>
                                    <p>Game Mode: Single Elimination</p>
                                    <p>Platform: <span>&#128187;</span></p>
                                    <p><span>&#127942;</span> INR 1,00,000</p>
                                    <p><span>&#128101;</span> 5 of 128</p>
                                    <button className="custom-status-btn custom-upcoming">UPCOMING</button>
                                    <p className="custom-event-date">5 Sept 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="custom-slide">
                            <div className="custom-card">
                                <img src="images/tour3.webp" alt="Event Image"/>
                                <div className="custom-event-info">
                                    <h3>TEC SHOWDOWN SERIES-SEASON 4</h3>
                                    <p>Game Mode: Single Elimination</p>
                                    <p>Platform: <span>&#128187;</span></p>
                                    <p><span>&#127942;</span> INR 1,00,000</p>
                                    <p><span>&#128101;</span> 5 of 128</p>
                                    <button className="custom-status-btn custom-upcoming">UPCOMING</button>
                                    <p className="custom-event-date">5 Sept 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <button className="custom-view-all">VIEW ALL</button>
            </div>
        </div>
</main>
 <div className="character-container">
   <input type="checkbox" id="toggle-chat" checked={isChatOpen} hidden readOnly />
   <label htmlFor="toggle-chat" className="character" onClick={toggleChat} tabIndex="0" role="button" aria-label="Toggle chat">
     <img src="/images/kurosawa2.gif" alt="Character" />
     <div className="message bot">Hello! How can I assist you today?</div>
   </label>
   
   {isChatOpen && (
     <div className="chat-container">
       <div id="chat-header">🤖 YOUR ESPORTS BUDDY</div>
       <div className="chat-box">
         {messages.map((msg) => (
           <div key={msg.id} className={`message ${msg.sender}`}>
             {msg.text}
           </div>
         ))}
       </div>
       <form onSubmit={sendMessage} className="message-input-form">
         <input
           type="text"
           id="chat-input"
           value={message}
           onChange={handleInputChange}
           placeholder="Type your message..."
           aria-label="Message input"
           required // Ensures the input is not empty
         />
         <button type="submit" id="send-button">Send</button>
       </form>
       <label htmlFor="toggle-chat" className="close-chat-overlay" onClick={toggleChat} aria-label="Close chat"></label>
     </div>
   )}
 </div>
    <footer>
        <div className="sections">
            <div className="heading">AEXLAB:</div>
            <div className="index">
                <a href="/HTML/index.html">INDEX</a>
                <a href="#">PRESS</a>
                <a href="#">CAREER</a>
                <a href="#">FAQ</a>
            </div>
        </div>
        <div className="vl"></div>
        <div className="sections">
            <div className="heading">VAIL VR:</div>
            <div className="index_in">
                <div className="index">
                    <a href="/HTML/index.html" target="_blank" rel="noopener noreferrer">INDEX</a>
                    <a href="#">GAME MODES</a>
                    <a href="#">WEAPONS</a>
                    <a href="#">SKINS</a>
                    <a href="#">MAPS</a>
                    <a href="#">LORE</a>
                </div>
                <div className="index">
                    <a href="/HTML/leaderboard.html" target="_blank" rel="noopener noreferrer">LEADERBOARD</a>
                    <a href="#">ESPORTS</a>
                    <a href="/HTML/community.html" target="_blank" rel="noopener noreferrer">GAME UPDATES</a>
                    <a href="/HTML/mediakit.html" target="_blank" rel="noopener noreferrer">MEDIA KIT</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">MERCH</a>
                </div>
            </div>
        </div>
        <div className="vl"></div>
        <div className="sections">
            <div className="heading">CONNECT:</div>
            <div className="index">
                <a href="#">INSTAGRAM</a>
                <a href="#">FACEBOOK</a>
                <a href="#">DISCORD</a>
                <a href="#">YOUTUBE</a>
                <a href="#">REDDIT</a>
                <a href="#">TIKTOK</a>
                <a href="#">X</a>
            </div>
        </div>
        <div className="vl"></div>
        <div className="sections">
            <div className="heading">CONTACT:</div>
            <div className="index">
                <a href="#">STUDIO@AEXLAB.COM</a>
            </div>
        </div>
    </footer>
    <hr />
    </>
  );
}

export default App;