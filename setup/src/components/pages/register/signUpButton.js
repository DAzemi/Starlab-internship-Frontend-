import GoogleButton from "react-google-button";

function SignUpButton() {
  const handleGoogleSignUp = () => {
    console.log("Google button clicked");
  };
  return (
    <div id="signUpButton">
      <GoogleButton
        clientId={process.env.SUPERNOVA_GOOGLE_CLIENT_ID}
        buttonText="Sign up with Google"
        type="light"
        label="Sign Up with Google"
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
    </div>
  );
}

export default SignUpButton;
