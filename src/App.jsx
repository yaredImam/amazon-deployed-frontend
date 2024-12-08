import { useContext, useEffect } from "react";
import Router from "../Router";
import "./App.css";
import Header from "./Components/Header/Header";

import Landing from "./Pages/Landing";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
