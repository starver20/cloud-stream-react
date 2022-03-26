import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';
import { VideoListing } from './pages/video-listing/VideoListing';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<VideoListing />} />
            <Route path="*" element={<VideoListing />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
