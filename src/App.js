import Board from "../src/components/board/Board";
import BGParticles from "./components/bgParticles/BGParticles";
import Modal from "./components/popUp/Modal";

import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

function App() {
  return (
    <div className="App">
      <BGParticles />
      <Board />
      <Modal enable={true} />
    </div>
  );
}

export default App;
