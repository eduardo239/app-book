/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
//
import MainMenu from "../components/menu/MainMenu";
import SignIn from "./auth/SignIn";
import BookById from "./books/BookById";
import BookList from "./books/BookList";
import UserAccount from "./user/UserAccount";
import NotFound from "./NotFound";
import SignUp from "./auth/SignUp";
import TestComponents from "./TestComponents";
import BookNew from "../components/modal/BookNew";
import { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../hooks/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid,
        });
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth, setUser]);

  useEffect(() => {
    if (user) {
      console.log(`O usuário ${user.displayName} foi atualizado`);
    } else {
      console.log("Nenhum usuário está autenticado atualmente");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="min-h-screen bg-gray-600 container mx-auto">
        <MainMenu />

        <div className="mt-2">
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route exact path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookById />} />
            <Route path="/book-new" element={<BookNew />} />

            <Route path="/user/:id" element={<UserAccount />} />

            <Route path="/components" element={<TestComponents />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
