import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/main.scss'
import DetailsPage from "./components/detailsPage";
import Header from "./components/header";
import MainPage from "./components/mainPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllDataFromApi } from './redux/actions'
import { InitialState } from "./redux/types";

function App() {

  const dispatch = useDispatch()
  const { darkMode } = useSelector((state: InitialState) => state)

  useEffect(() => {
    dispatch({
      type: getAllDataFromApi
    })
  }, [])


  return (
    <div className={`_root ${darkMode ? 'veryDarkMode' : 'lightMode'}`}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:name" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
