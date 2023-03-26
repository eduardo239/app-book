import {
  addDoc,
  collection,
  Timestamp,
  getDocs,
  limit,
  orderBy,
  query,
  getDoc,
  doc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../config/firebase";

const colleciontBooks = collection(db, "books");

/**
 *
 * @param {event} e
 * @param {imagem} file
 * @param {livro} book
 */
export const addNewBook = async (e, file, book) => {
  e.preventDefault();

  if (file) await handleSendFile(file, book);
  else saveNewBook("", book);
};

export const saveNewBook = async (posterURL = "", book) => {
  const payload = {
    ...book,
    createdAt: Timestamp.fromDate(new Date()),
    posterURL,
  };

  try {
    const docRef = await addDoc(colleciontBooks, payload);
    console.log(docRef.id);
  } catch (error) {
    console.log(error.message);
  }
};

export const handleSendFile = async (file, book) => {
  const metadata = {
    contentType: "image/jpeg",
  };

  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = await uploadBytesResumable(storageRef, file, metadata);

  uploadTask.task.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
          break;
      }
    },
    (error) => {
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          console.log("User doesn't have permission to access the object");
          break;
        case "storage/canceled":
          console.log("User canceled the upload");
          break;
        case "storage/unknown":
          console.log("Unknown error occurred, inspect error.serverResponse");
          break;
        default:
          break;
      }
    },
    () => {
      getDownloadURL(uploadTask.task.snapshot.ref).then((downloadURL) => {
        saveNewBook(downloadURL, book);
      });
    }
  );
};

export const getAllbooks = async () => {
  ///
  const qPages = query(
    colleciontBooks,
    orderBy("createdAt", "desc"),
    limit(30)
  );
  try {
    const docBooks = await getDocs(qPages);

    const bookList = [];
    docBooks.forEach((item) => {
      bookList.push({ ...item.data(), id: item.id });
    });

    return bookList;
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookById = async (id) => {
  const docRef = doc(db, "books", id);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists) {
      return { ...docSnap.data(), id: docSnap.id };
    }
  } catch (error) {
    console.log(error.message);
  }
};
