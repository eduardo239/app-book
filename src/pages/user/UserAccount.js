import { useContext, useState } from "react";
import { UserContext } from "../../hooks/UserContext";
import { Navigate } from "react-router-dom";
import posterDefault from "../../assets/images/book-poster.jpg";
import InputButton from "../../components/form/InputButton";
import Modal from "../../components/ui/Modal";
import BookNew from "../../components/modal/BookNew";
import { IoAddOutline } from "react-icons/io5";
import UserEdit from "../../components/modal/UserEdit";

const UserAccount = () => {
  const { user, userSignOut } = useContext(UserContext);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  if (user)
    return (
      <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-64 bg-white flex items-center justify-center">
            <img
              className="poster-md shadow-md border-white border-4 border-solid"
              src={user.photoURL ? user.photoURL : posterDefault}
              alt={user.username}
            />
          </div>
          <div className="flex-1">
            <code className="text-sm block w-full p-2 text-gray-500 text-right">
              <button onClick={() => setIsUserModalOpen(true)}>
                atualizar
              </button>
              {` `}
              <button onClick={() => userSignOut()}>sair</button>
            </code>
            <h1 className="text-3xl font-bold text-gray-900">
              @{user.displayName}
            </h1>

            <p className="text-md font-medium text-gray-900 mt-4">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-md font-medium text-gray-900 mt-4">
              <strong>UID:</strong>
              <code className="text-md w-full p-2 text-gray-500 ">
                {user.uid}
              </code>
            </p>

            <Modal
              isOpen={isUserModalOpen}
              onClose={() => setIsUserModalOpen(false)}
            >
              <UserEdit />
            </Modal>

            <div className="mt-10">
              <h2 className="text-1xl font-bold text-gray-900 mb-3">
                Adicionar um livro
              </h2>
              <InputButton
                label={<IoAddOutline />}
                onClick={() => setIsBookModalOpen(true)}
              />
              <Modal
                isOpen={isBookModalOpen}
                onClose={() => setIsBookModalOpen(false)}
              >
                <BookNew />
              </Modal>
            </div>
          </div>
        </div>
        {/* */}
      </div>
    );
  else return <Navigate to="/sign-up" replace={true} />;
};

export default UserAccount;
