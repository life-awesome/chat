import { Link } from "react-router-dom";
import CustomInput from "../../components/Input/CustomInput";

const LoginPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <img src="" alt="" />
        <div>Sign In</div>
        <form>
          <CustomInput name="" value="" />
          <CustomInput name="" value="" />
        </form>
        <div>
          <button>Sign In</button>
        </div>
        <div>
          <input type="checkbox" />
          <Link to={"/"}>Forgot Password?</Link>
        </div>
      </div>
      <div>
        <p>
          Not a Member? <Link to={"/"}>Create on Account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
