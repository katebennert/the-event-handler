import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import '../styles/LoginPage.css';

function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="login-page">
        <div className="login-signup-container">
            {showSignUp ? (
                <>
                    <SignUpForm />
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
        </div>
    </div>
  );
}

export default LoginPage;