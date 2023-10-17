import "./App.css";
import bgImg from "./images/bgImg.png";

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
        <div className="form_container">
          <h2 className="form_title">Super app</h2>
          <p className="form_heading">Create your new account</p>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="UserName"></input>
          <input type="email" placeholder="Email"></input>
          <input type="number" placeholder="Mobile"></input>
          <div className="terms_checklist">
            <input type="checkbox"></input>
            <label className="terms_label">
              Share my registration data with Superapp
            </label>
          </div>
          <button className="signUp_Btn">Sign up</button>
          <div>
            <p className="terms_condi">
              By clicking on Sign up. you agree to Superapp
              <span className="terms_active">Terms and Conditions of Use</span>
            </p>
            <p className="terms_condi">
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <span className="terms_active">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
