import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/main.scss'
import DetailsPage from "./components/detailsPage";
import Header from "./components/header";
import MainPage from "./components/mainPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
