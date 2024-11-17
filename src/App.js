import { useToggle } from "./hooks/useToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { HomePage } from "./Screens/HomePage";
import { ContactPage } from "./components/ContactPage";
export const AppContext = createContext();

function App() {
  const [state, toggle] = useToggle();
  return (
    <AppContext.Provider value={{ state, toggle }}>
      <div className='w-full'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
