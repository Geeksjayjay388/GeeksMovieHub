import Home from './Home.jsx';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Contact from './Contact.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;