import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log("userDocRef@signIn.component: ", userDocRef);
  };

  return (
    <div>
      <h1>This is Login Page</h1>
      <button onClick={logGoogleUser}>Sign In wit Google: pop up</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
