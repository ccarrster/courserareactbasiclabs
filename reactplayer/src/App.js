import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player/youtube";

function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );
function toggle1(){
  if(bird1.paused){
    bird1.play();
  } else {
    bird1.pause();
  }
}

  return (
    <div className="App">
      <h1>Carrot tops</h1>
      <ReactPlayer url='https://www.youtube.com/watch?v=g1rCen2ZIm0'/>
    </div>
  );
}

export default App;
