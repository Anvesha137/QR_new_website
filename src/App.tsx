import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import Platforms from "./components/Platforms";
import DashboardHomepage from "./components/DashboardHomepage";
import Features from "./components/Features";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import { FeatureRichChatbot } from "./components/FeatureRichChatbot";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Navbar />
      <Hero />
      <Methodology />
      <Platforms />
      <DashboardHomepage />
      <Features />
      <PreFooter />
      <Footer />
      <FeatureRichChatbot />
    </div>
  );
}
