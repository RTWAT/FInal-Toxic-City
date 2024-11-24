import Header from './components/Header/Header';
import MainPage from './components/main/MainPage';

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <MainPage className="flex-grow" />
    </div>
  );
}
