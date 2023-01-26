import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Join Us Now</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input placeholder="Fullname" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
