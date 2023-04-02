import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const updateUser = async (e, payload) => {
  e.preventDefault();

  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // const uid = user.uid;
    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;

    await updateProfile(auth.currentUser, {
      displayName: payload.displayName,
      photoURL: payload.photoURL,
    });
    const updatedUser = auth.currentUser;

    return {
      displayName: updatedUser.displayName,
      email: updatedUser.email,
      photoURL: updatedUser.photoURL,
      providerId: updatedUser.providerId,
      uid: updatedUser.uid,
    };
  } else {
    console.log("Usuário não logado");
    return null;
  }
};

export const updateUserEmail = async (e, payload) => {
  e.preventDefault();
  const auth = getAuth();
  updateEmail(auth.currentUser, payload.email)
    .then(() => {
      console.log("Email atualizado");
    })
    .catch((error) => {
      console.log("Usuário não logado");
    });
};

export const handleSignInWithEmail = async (
  e,
  payload,
  setUser,
  setError,
  setLoading
) => {
  e.preventDefault();

  if (!payload) return;
  if (!payload.email) return setError("O e-mail é obrigatório.");
  if (!payload.password) return setError("A senha é obrigatória.");
  const auth = getAuth();

  try {
    setLoading(true);
    const { user } = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    setUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
    });
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export const handleSignUpWithEmail = async (
  e,
  payload,
  setUser,
  setError,
  setLoading
) => {
  e.preventDefault();

  if (!payload) return;
  if (!payload.terms) return setError("É necessário aceitar os termos.");
  if (!payload.email) return setError("O e-mail é obrigatório.");
  if (!payload.username) return setError("O nome de usuário é obrigatório.");
  if (!payload.password) return setError("A senha é obrigatória.");
  const auth = getAuth();

  setError(null);
  try {
    setLoading(true);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    setUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
    });
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export const handleSignOut = async () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const handleGoogleSignIn = async (e, setUser) => {
  e.preventDefault();
  const auth = getAuth();

  await signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line no-unused-vars
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        providerId: user.providerId,
        uid: user.uid,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      // eslint-disable-next-line no-unused-vars
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.message;

      // The email of the user's account used.
      // eslint-disable-next-line no-unused-vars
      const email = error.customData.email;
      // The AuthCredential type that was used.
      // eslint-disable-next-line no-unused-vars
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const handleGithubSignIn = async (e, setUser) => {
  e.preventDefault();
  const auth = getAuth();
  await signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        providerId: user.providerId,
        uid: user.uid,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      // eslint-disable-next-line no-unused-vars
      const email = error.customData.email;
      // The AuthCredential type that was used.
      // eslint-disable-next-line no-unused-vars
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};
