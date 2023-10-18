import "./App.css";
import bgImg from "./images/bgImg.png";
import FormData from "./components/Form";

function App() {
  return (
    <>
      <div className="signUp_container">
        <div className="bg_img_wrapper">
          <img src={bgImg} alt="background_image" className="bgImg"></img>
          <div className="bg_text_wrapper">
            <p>Discover new things on</p>
            <p>Superapp</p>
          </div>
        </div>
        <FormData />
      </div>
    </>
  );
}

export default App;
