import "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import './Welcome.css';

const clientId = "854801450505-s8587henb9cl084he14ap11pubok812o.apps.googleusercontent.com";

function Welcome() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="welcome">
        <div className="box">
          <h2 style={{ color: "red" }}>Google Login</h2>
          <p>If you see this text, the component is rendering.</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Login Success: ", credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            
          />
         
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Welcome;
