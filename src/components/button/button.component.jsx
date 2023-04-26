import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  RegisterButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
  register: "register",
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASS.register]: RegisterButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherprops }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherprops}>{children}</CustomButton>;
};

export default Button;
