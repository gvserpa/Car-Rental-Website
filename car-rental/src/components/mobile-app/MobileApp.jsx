import phone from "../../assets/phones.png"
import "./index.css";
import apple from "../../assets/apple.png";

function MobileApp() {
  return (
    <div className="mobile-app">
      <div className="mobile-app-img">
        <img src={phone} />
      </div>
      <div className="mobile-app-content">
        <h3>Convenient Interaction</h3>
        <h2>Modern App</h2>
        <p>
          We developed a simple and function app. It is built in such a way as
          to simplify the problem of the car selection and rental process. View
          the location, statement, and other information about each of the
          vehicles in one click.
        </p>
        <div className="mobile-button">
          <button>
            {" "}
            <img src={apple} />
            Download app
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
