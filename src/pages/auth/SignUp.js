import InputButton from "../../components/form/InputButton";
import InuptField from "../../components/form/InuptField";
import InputCheckbox from "../../components/form/InputCheckbox";
import TextTitle from "../../components/form/TextTitle";
import { handleSignUpWithEmail } from "../../helper/api_user";
import { useContext, useState } from "react";
import { UserContext } from "../../hooks/UserContext";
import { Navigate } from "react-router-dom";
import LinkTo from "../../components/ui/LinkTo";

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleRegister = async (e) => {
    setError(null);
    handleSignUpWithEmail(e, data, setUser, setError, setLoading);
  };

  if (!user)
    return (
      <div className="flex center-items justify-center mb-1">
        <form
          onSubmit={handleRegister}
          style={{ width: "400px" }}
          className="bg-white p-5 rounded"
        >
          <TextTitle value="Registro" />
          <InuptField
            type="email"
            label="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <InuptField
            type="text"
            label="Username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <InuptField
            type="password"
            label="Senha"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <InputCheckbox
            label="Aceito os termos"
            onChange={(e) => setData({ ...data, terms: e.target.checked })}
          />

          <InputButton full disabled={loading} label="Registrar" />

          <LinkTo label="Já tem uma conta? Entre aqui!" to="/sign-in" />

          {error && <p>{error}</p>}
        </form>
      </div>
    );
  else return <Navigate to="/books" replace={true} />;
};

export default SignUp;
