import Home from './pages/Home';
import CanvasModel from './canvas';
import Customizer from './pages/Customizer';

function App() {

  return (
    <main className="relative w-full h-screen overflow-hidden transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App
