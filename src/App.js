import Board from "../src/components/board/Board";
import BGParticles from "./components/bgParticles/BGParticles";

import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

function App() {
  return (
    <div className="App">
      <BGParticles />
      <Board />
    </div>
  );
}

export default App;
