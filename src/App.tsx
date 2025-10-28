import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import Platforms from "./components/Platforms";
import DashboardHomepage from "./components/DashboardHomepage";
import Features from "./components/Features";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Navbar />
      <Hero />
      <div id="products">
        <Methodology />
      </div>
      <div id="solutions">
        <Platforms />
      </div>
      <div id="integrations">
        <DashboardHomepage />
      </div>
      <div id="pricing">
        <Features />
      </div>
      <div id="analytics">
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Analytics</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                Analytics Dashboard Visualization
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
}