import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Backend from './pages/BackendOverview';
import ThreeD from './pages/ThreeDOverview';
import Video from './pages/VideoOverview';
import Landing from './pages/Landing';
import PageWrapper from './layouts/PageWrapper';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/backend" element={<PageWrapper><Backend /></PageWrapper>} />
        <Route path="/3d" element={<PageWrapper><ThreeD /></PageWrapper>} />
        <Route path="/video" element={<PageWrapper><Video /></PageWrapper>} />
      </Routes>
    </>
  );
}

export default App;