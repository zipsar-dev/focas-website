import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
const Courses = lazy(() => import("./components/Courses"));
const FAQ = lazy(() => import("./components/FAQ"));
const Feedback = lazy(() => import("./components/Feedback"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Stories = lazy(() => import("./components/Stories"));
const SuccessStories = lazy(() => import("./components/SuccessStories"));

const LoadingScreen = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
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
    </Suspense>
  );
};

export default App;
