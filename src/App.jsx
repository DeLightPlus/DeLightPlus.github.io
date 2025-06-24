import "./App.css";
import "./index.css"
import { useState, useEffect } from 'react';

// import SplashScreen from "./components/Chat/SplashScreen";
import Portfolio from "./components/Portfolio/Portfolio"
import ChatModal from "./components/Chat/ChatModal";
import FloatingGameButton from "./components/Buttons/FloatingGameButton/FloatingGameButton";

function App() 
{  
  const [chatMinimized, setChatMinimized] = useState(true);
  const [chatMaximized, setChatMaximized] = useState(false);

  const handleChatToggle = () => {
    setChatMinimized(!chatMinimized);
    setChatMaximized(false);  // Reset maximize on minimize
  };

  const handleChatMaximize = () => setChatMaximized(true);
  const handleChatRestore = () => setChatMaximized(false);

  return (

    <>
      {
        chatMinimized ? (
          <>
            <div className="floating-buttons-container">
              <button className="minimized-chat"
                onClick={handleChatToggle}> Chat 🤖
              </button>            
            </div>
          </>
        ):(
          <ChatModal  
            chatMaximized={ chatMaximized } 
            handleChatMaximize={ handleChatMaximize }
            handleChatToggle={ handleChatToggle } 
            handleChatRestore={ handleChatRestore }
          />
        )
      }
      
      <Portfolio chatModalOpen={!chatMinimized} />
    </>
  )
    

}

export default App;
