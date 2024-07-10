import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Players"; // Corrected path
import Displayv from "./components/Display";
import { PlayerContext } from "./context/PlayerContext.jsx";



const App = () => {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Displayv />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}
export default App