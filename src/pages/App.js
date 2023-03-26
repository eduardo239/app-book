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
import BookNew from "./books/BookNew";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="min-h-screen bg-gray-300 container mx-auto">
        <MainMenu />

        <div className="p-5">
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
