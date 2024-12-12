import { Storefront } from "@mui/icons-material";
import { MouseEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../../firebase";

function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const valid = (email: string, password: string) => {
    return email.length && password.length >= 8;
  };
  const signIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) =>{
        console.log(auth)
        if(auth)navigate("/", { replace: true });
  })
      .catch((error) => {
        if(error.code==="auth/invalid-credential")
        setErr("Invalid email or password!")
  });
  };
  const signup = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/", { replace: true }))
      .catch((error) => {
        if(error.code ==="auth/email-already-in-use")setErr("Account with same email already exist!")
        else { setErr(error.message)}
  });
  };

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center">
      <div className="bg-white ">
        <NavLink
          to="/"
          className="flex items-center justify-center py-[20px]  text-[#ff9f00]"
        >
          <Storefront className="" fontSize="large" />
          <h2 className="text-black">eShop</h2>
        </NavLink>
        {err ? <p className="px-[10px] py-[5px] my-[5px] text-rose-600 bg-slate-100 border-l-4 border-rose-400">{err}</p> : null}
        <div className="w-[300px] max-h-max flex flex-col border-[1px] border-gray-200 p-[20px] rounded-[5px]">
          <h1 className="font-[500] mb-[20px]">Sign-in</h1>
          <form>
            <fieldset>
              <legend className="mb-[5px]">E-mail</legend>
              <input
                className="h-[30px] mb-[10px] bg-white w-[98%] border focus:outline-[#ff9f00]"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </fieldset>
            <fieldset>
              <legend className="mb-[5px]">Password</legend>
              <input
                className="h-[30px] mb-[10px] bg-white w-[98%] border focus:outline-[#ff9f00]"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <button
              className="bg-[#ff9f00] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-[2px] w-full h-[30px] border-[1px] border-t-[#a88734] border-x-[#9c7e31] border-b-[#846a29]"
              disabled={!valid}
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>
          <p className="mt-[15px]  text-[12px]">
            By signing-in you agree to the eShop Website Terms and Conditions of
            use & sale. Please see our Privacy Notice, our Cookies Notice and
            our Interest-Based Ads Notice.
          </p>
          <button 
          className="rounded-[2px] bg-gray-100 w-full h-[30px] border-[1px] mt-[10px] border-gray-300"
          onClick={signup}
          >
            Create you eShop Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
