import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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

  await signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
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
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const handleGithubSignIn = async (e, setUser) => {
  e.preventDefault();
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
