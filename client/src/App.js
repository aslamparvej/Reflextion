import React from "react";
import "./App.css";
import Header from "./components/home/header/Header";
import Main from "./components/home/main/Main";
import Footer from "./components/home/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
