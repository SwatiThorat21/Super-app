import { useState } from "react";

export default function FormData() {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobileNo: "",
    isSharedData: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <h2 className="form_title">Super app</h2>
          <p className="form_heading">Create your new account</p>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          ></input>
          <input
            type="text"
            placeholder="UserName"
            name="userName"
            onChange={handleChange}
            value={formData.userName}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          ></input>
          <input
            type="number"
            placeholder="Mobile"
            name="mobileNo"
            onChange={handleChange}
            value={formData.mobileNo}
          ></input>

          <div className="terms_checklist">
            <input
              type="checkbox"
              name="isSharedData"
              onChange={handleChange}
              checked={formData.isSharedData}
            ></input>
            <label className="terms_label" htmlFor="isSharedData">
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
      </form>
    </>
  );
}
