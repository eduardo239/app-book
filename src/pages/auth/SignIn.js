import InputButton from "../../components/form/InputButton";
import InuptField from "../../components/form/InuptField";
import TextTitle from "../../components/form/TextTitle";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import {
  handleGithubSignIn,
  handleGoogleSignIn,
  handleSignInWithEmail,
} from "../../helper/api_user";
import { useContext, useState } from "react";
import { UserContext } from "../../hooks/UserContext";

const SignIn = () => {
  const { setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleLogin = async (e) => {
    setError(null);
    handleSignInWithEmail(e, data, setUser, setError, setLoading);
  };
  return (
    <>
      <div className="flex center-items justify-center mb-1">
        <form
          onSubmit={handleLogin}
          style={{ width: "400px" }}
          className="bg-white p-5 rounded"
        >
          <TextTitle value="Entrar" />
          <InuptField
            type="text"
            label="Username"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <InuptField
            type="password"
            label="Senha"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <InputButton full disabled={loading} label="Entrar" />

          {error && <p>{error}</p>}
        </form>
      </div>
      <div className="flex center-items justify-center">
        <div
          style={{ width: "400px" }}
          className="bg-white p-5 rounded flex gap-1"
        >
          <InputButton
            full
            label={<IoLogoGoogle />}
            onClick={(e) => handleGoogleSignIn(e, setUser)}
          />
          <InputButton
            full
            label={<IoLogoGithub />}
            onClick={(e) => handleGithubSignIn(e, setUser)}
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
