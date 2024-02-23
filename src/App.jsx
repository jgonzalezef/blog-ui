import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Feed } from './pages/feed/feed';
import { Profile } from './pages/profile/profile';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
