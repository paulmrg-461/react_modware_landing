import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProposalElBodegazo from './pages/ProposalElBodegazo';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elbodegazot" element={<ProposalElBodegazo />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
