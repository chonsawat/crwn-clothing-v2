import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    async function getRedirectResultResponse() {
      const response = await getRedirectResult(auth);
      console.log("getRedirectResult: ", response);

      if (response) {
        const userDocRef = createUserDocumentFromAuth(response.user);
      }
    }
    getRedirectResultResponse();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log("userDocRef@signIn.component: ", userDocRef);
  };

  const logGoogleRedirect = async () => {
    const response = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log("userDocRef@signIn.component: ", userDocRef);
  };

  return (
    <div>
      <h1>This is Login Page</h1>
      <button onClick={logGoogleUser}>Sign In wit Google: pop up</button>
      <button onClick={logGoogleRedirect}>Sign In wit Google: redirect</button>
    </div>
  );
};

export default SignIn;
