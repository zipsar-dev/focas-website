import About from "./components/About";
import Courses from "./components/Courses";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import SuccessStories from "./components/SuccessStories";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-6">
      <Header />
      <main className="w-full">
        <Hero />
        <Stories />
        <Courses />
        <About />
        <SuccessStories />
        <Feedback />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default App;
