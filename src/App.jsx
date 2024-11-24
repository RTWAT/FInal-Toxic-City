import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/main/MainPage';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import MemberPage from './components/MemberPage';

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
          path="/uber-uns"
          element={<About />}
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
          path="/member/:name"
          element={<MemberPage />}
        />
      </Routes>
    </div>
  );
}
