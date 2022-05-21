import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout';
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [dispatch])

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/checkout" exact element={<>
            <Header />
            <Checkout />
            </>}/>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<>
            <Header />
            <Home />
            </>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
