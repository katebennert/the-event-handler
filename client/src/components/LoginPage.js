import React, { useState } from "react";
import LoginForm from "./LoginForm";
import ClientSignUpForm from "./ClientSignUpForm";

function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
        <img className="logo" src="https://i.imgur.com/pDinA3g.png" alt="UpFed Logo" />
            {showSignUp ? (
                <>
                    <ClientSignUpForm />
                    <p>
                        Already have an account? &nbsp;
                        <span className="sign-up-login-switch" onClick={() => setShowSignUp(false)}>
                            Login here.
                        </span>
                    </p>
                </>
            ) : (
                <>
                    <LoginForm />
                    <p>
                        Need an EventHandler account? &nbsp;
                        <span className="sign-up-login-switch" onClick={() => setShowSignUp(true)}>
                            Sign up here.
                        </span>
                    </p>
                </>
            )}
    </>
  );
}

export default LoginPage;