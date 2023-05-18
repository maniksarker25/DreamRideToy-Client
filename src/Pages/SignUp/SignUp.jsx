import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/login/login.svg";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, logOut, googleSignIn } = useContext(authContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    setError('');
    setSuccess('');
    if (password.length < 6) {
      setError("Password must have 6 character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        logOut();
        navigate("/login");
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // google sign up
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess('User Create Successfully')
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };
  return (
    <div className="hero mt-4 lg:mt-16">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="text-center lg:w-1/2">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photoUrl"
                  required
                  className="input input-bordered"
                />
              </div>
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
                  type="text"
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
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <div className="form-control mt-6">
                <input className="primary-btn" type="submit" value="SignUp" />
              </div>
            </form>
          </div>
          <p className="text-center -mt-4">Or Sign In With</p>
          <div className="text-center my-4">
            <button className="mr-2 bg-stone-200 p-2 rounded-full text-blue-500 text-xl">
              <FaFacebook />
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="mr-2 bg-stone-200 p-2 text-[#ea4335] rounded-full text-xl "
            >
              <FaGoogle />
            </button>
          </div>
          <p className="text-center mb-4">
            Have an account?
            <Link to="/login" className="text-orange-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
