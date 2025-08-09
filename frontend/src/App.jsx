import "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import ContactUs from "./views/ContactUs";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Circular from "./views/Circular";
import AdminLogin from "./views/AdminLogin";
import AdminCircular from "./views/AdminCircular";
import Profile from "./views/Profile";
import Welcome from "./views/Welcome";
import Guideline from "./views/Guideline";
import AdminHome from "./views/AdminHome";
import Sidebar from "./components/Sidebar";
import "./components/Header";
import ManageCircular from "./views/ManageCircular";
import EditJobForm from "./views/EditJobForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProfilePage from "./views/ProfilePage";
import ViewDetails from "./views/ViewDetails"; // Fixed previously
import Research from "./views/Research";
import Apply from "./views/Apply";
import UserManagement from "./views/UserManagement";
import ChangePass from "./views/ChangePass"; // Fixed import
import ApplicationManagement from "./views/ApplicationManagement";
import AdvocacyPage from "./views/AdvocacyPage";
import InnovationPage from "./views/InnovationPage";

const clientId = "854801450505-s8587henb9cl084he14ap11pubok812o.apps.googleusercontent.com";

const AppLayout = () => {
  const location = useLocation();
  const noFooterRoutes = ["/adminHome", "/sidebar", "/manage-jobs", "/edit-job/:id"];

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/circular" element={<Circular />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/guideline" element={<Guideline />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/adminCirculars" element={<AdminCircular />} />
          <Route path="/manage-jobs" element={<ManageCircular />} />
          <Route path="/edit-job/:id" element={<EditJobForm />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/jobs/:id" element={<ViewDetails />} />
          <Route path="/userManagement" element={<UserManagement />} />
          <Route path="/research" element={<Research />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/applicationManagement" element={<ApplicationManagement />} />
          <Route path="/change" element={<ChangePass />} />
          <Route path="/advocacy" element={<AdvocacyPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
        </Routes>
      </div>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <AppLayout />
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;