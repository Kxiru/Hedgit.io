import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;