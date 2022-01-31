import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import { GlobalStyle, Navigationbar } from "./components";

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
