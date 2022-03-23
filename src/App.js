import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main>
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
