import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/main/MainPage';
import Über_uns from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Mitglieder from './components/MemberPage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/über-uns"
          element={<Über_uns />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/mitglieder/:name"
          element={<Mitglieder />}
        />
      </Routes>
    </div>
  );
}
