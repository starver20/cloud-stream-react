import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';
import { VideoListing } from './pages/video-listing/VideoListing';
import { SingleVideo } from './pages/single-video/SingleVideo';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { Playlists } from './pages/playlist/Playlists';
import { SinglePlaylist } from './pages/playlist/SinglePlaylist';
import Mockman from 'mockman-js';
import { useState } from 'react';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <aside className={`sidebar ${showSidebar ? 'active' : ''}`}>
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<VideoListing />} />
            <Route path="/video/:videoId" element={<SingleVideo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/playlist" element={<Playlists />} />
            <Route path="/:playlistType" element={<SinglePlaylist />} />
            <Route
              path="/playlist/:playlistType"
              element={<SinglePlaylist />}
            />
            <Route path="/m" element={<Mockman />} />
            <Route path="*" element={<VideoListing />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
