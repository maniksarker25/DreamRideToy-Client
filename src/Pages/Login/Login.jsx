import { Link} from "react-router-dom";
import loginImg from '../../assets/login/login.svg'
import { FaFacebook,FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="hero mt-4 lg:mt-16">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="text-center lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form  action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className='primary-btn'
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
          <p className="text-center -mt-4">Or Sign In With</p>
          <div className="text-center my-4">
            <button className="mr-2 bg-stone-200 p-2 rounded-full text-blue-500 text-xl"><FaFacebook/></button>
            <button className="mr-2 bg-stone-200 text-[#ea4335] p-2 rounded-full text-xl "><FaGoogle/></button>
          </div>
            <p className="text-center mb-4" >New to DreamRideToy?<Link to='/signUp' className="text-primary font-bold">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
