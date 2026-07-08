import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <Header title="Profile" />

        <div className="profile-card">
          <h2>User Profile</h2>

          <div className="profile-info">
            <p>
              <strong>Name :</strong> {user?.name}
            </p>

            <p>
              <strong>Email :</strong> {user?.email}
            </p>

            <p>
              <strong>Status :</strong> Active User
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;