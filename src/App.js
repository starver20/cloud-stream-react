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
import RequiresAuth from './components/auth/RequiresAuth';

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

            <Route
              path="/playlist"
              element={
                <RequiresAuth>
                  <Playlists />
                </RequiresAuth>
              }
            />
            <Route
              path="/:playlistType"
              element={
                <RequiresAuth>
                  <SinglePlaylist />
                </RequiresAuth>
              }
            />
            <Route
              path="/playlist/:playlistType"
              element={
                <RequiresAuth>
                  <SinglePlaylist />
                </RequiresAuth>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/m" element={<Mockman />} />
            <Route path="*" element={<VideoListing />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
