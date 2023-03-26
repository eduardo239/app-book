import InputButton from "../../components/form/InputButton";
import InuptField from "../../components/form/InuptField";
import TextTitle from "../../components/form/TextTitle";

const SignIn = () => {
  return (
    <>
      <div className="flex center-items justify-center mb-1">
        <form style={{ width: "400px" }} className="bg-white p-5 rounded">
          <TextTitle value="Entrar" />
          <InuptField type="text" label="Username" />
          <InuptField type="password" label="Senha" />
          <InputButton full label="Entrar" />
        </form>
      </div>
      <div className="flex center-items justify-center">
        <form
          style={{ width: "400px" }}
          className="bg-white p-5 rounded flex gap-1"
        >
          <InputButton full label="Google" />
          <InputButton full label="Github" />
        </form>
      </div>
    </>
  );
};

export default SignIn;
