import Courses from "./components/Courses";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import SuccessStories from "./components/SuccessStories";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
      <Header />
      <main className="w-full">
        <Hero />
        <Stories />
        <Courses />
        <SuccessStories />
      </main>
    </div>
  );
};

export default App;
