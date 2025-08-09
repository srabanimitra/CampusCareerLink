import { GoogleLogout } from 'react-google-login';

const clientId = "854801450505-s8587henb9cl084he14ap11pubok812o.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("LOGOUT SUCCESSFUL!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;