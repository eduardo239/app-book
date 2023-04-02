import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";

const MainMenu = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <NavLink
            to="/books"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            Minha Logo
          </NavLink>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <input
            className="bg-gray-700 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Buscar"
          />
        </div>
        <div className="flex items-center flex-shrink-0 text-white ml-6">
          {user && (
            <NavLink
              to={`/user/${user.uid}`}
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            >
              {user.email ? user.email : "Usuário"}
            </NavLink>
          )}
          {!user && (
            <NavLink
              to="/sign-in"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            >
              Entrar
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
