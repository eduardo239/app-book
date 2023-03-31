import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import { Navigate } from "react-router-dom";

const UserAccount = () => {
  const { user } = useContext(UserContext);

  if (user)
    return (
      <div className="p-5 bg-white shadow-md overflow-hidden">UserAccount</div>
    );
  else return <Navigate to="/sign-up" replace={true} />;
};

export default UserAccount;
