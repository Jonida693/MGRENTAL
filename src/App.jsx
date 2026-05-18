import { HashRouter as Router, Routes, Route, Outlet, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchCars from "./components/SearchCars";
import MoreInfo from './components/MoreInfo';
import Benefits from './components/Benefits';
import Teaser from './components/Teaser';
import StageSlider from './components/StageSlider';
import ResultsPage from "./components/ResultsPage";
import './App.css';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function HomePage() {
  const [params] = useSearchParams();
  const hasSearch = params.get("pickupDate") || params.get("pickupTime") || params.get("dropoffDate") || params.get("dropoffTime");

  // If search params exist, render the results view while keeping the URL at `/`
  if (hasSearch) return <ResultsPage />;

  return (
    <>
      <SearchCars />
      <Benefits />
      <MoreInfo />
      <StageSlider />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;