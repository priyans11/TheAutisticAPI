// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import SigninForm from "./components/SigninForm";
// import SignupFormDemo from "./components/signup-form-demo";
// import AboutTab from "./NAVTAB/AboutTab";
// import ServicesTab from "./NAVTAB/ServicesTab";
import About from "./section/About";
import Demo from "./section/Demo";
import Header from "./section/Header";

const App = () => {
  return (
    <>

   
      <Header/>
      <Demo/>
      <About/>
    </>
  );
};

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<SigninForm />} />
//         <Route path="/signup" element={<SignupFormDemo />} />
//         <Route path="/about" element={<AboutTab />} />
//         <Route path="/services" element={<ServicesTab />} />
//       </Routes>
//     </Router>
//   );
// };

export default App;