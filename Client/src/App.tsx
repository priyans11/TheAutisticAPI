import AboutTab from "./NAVTAB/AboutTab";
import ServicesTab from "./NAVTAB/ServicesTab";
import About from "./section/About";
import Demo from "./section/Demo";
import Header from "./section/Header";

const App = () => {
  return (
    <>
      <ServicesTab/>
      <Header/>
      <Demo/>
      <About/>
      <AboutTab/>
    </>
  );
};

export default App;