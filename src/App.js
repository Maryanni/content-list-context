import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import injectContext from './store/context';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>;
}

export default injectContext(App);
