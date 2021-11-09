import "./styles.css";
import Navbar from "./Components/Navbar.jsx";
import TextForm from "./Components/TextForm.jsx";
import AboutTextUtils from "./Components/AboutTextUtils";
export default function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <TextForm /> */}
      <AboutTextUtils/>
    </>
  );
}
