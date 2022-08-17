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

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: getAllDataFromApi
    })
  }, [])


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
