import Sidebar from './components/Sidebar';
import SobreMi from './sections/SobreMi';
import Habilidades from './sections/Habilidades';
import Modelado3D from './sections/Modelado3D';
import Animaciones from './sections/Animaciones';
import EdicionVideo from './sections/EdicionVideo';
import BackendAPIs from './sections/BackendAPIs';
import Contacto from './sections/Contacto';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto px-4 py-8 space-y-24 scroll-smooth">
        <section id="sobremi"><SobreMi /></section>
        <section id="habilidades"><Habilidades /></section>
        <section id="modelado"><Modelado3D /></section>
        <section id="animaciones"><Animaciones /></section>
        <section id="video"><EdicionVideo /></section>
        <section id="backend"><BackendAPIs /></section>
        <section id="contacto"><Contacto /></section>
      </main>
    </div>
  );
}

export default App;
