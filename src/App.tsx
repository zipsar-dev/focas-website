import './App.css'
import Courses from './components/Courses';
import Header from './components/Header';
import Hero from './components/Hero';
import SuccessStories from './components/SuccessStories';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <Header/>
      <main className="w-full max-w-7xl text-center">
        <Hero/>
        <Courses/>
        <SuccessStories/>
      </main>
    </div>
  );
};

export default App
