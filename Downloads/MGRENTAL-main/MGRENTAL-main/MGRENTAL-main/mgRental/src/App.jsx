import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;