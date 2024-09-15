// src/pages/adminPages/Settings.js
import React, { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    username: "admin",
    email: "admin@example.com",
  });
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [preferences, setPreferences] = useState({
    theme: "light",
    notifications: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveProfile = () => {
    // Save profile logic here
    alert("Profile saved!");
  };

  const changePassword = () => {
    // Change password logic here
    alert("Password changed!");
  };

  const savePreferences = () => {
    // Save preferences logic here
    alert("Preferences saved!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl mb-2">Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="button"
            onClick={saveProfile}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Profile
          </button>
        </form>
      </div>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl mb-2">Change Password</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="current-password">
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              name="current"
              value={password.current}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="new-password">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              name="new"
              value={password.new}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="confirm-password">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm"
              value={password.confirm}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="button"
            onClick={changePassword}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
        </form>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl mb-2">Preferences</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="theme">
              Theme
            </label>
            <select
              id="theme"
              name="theme"
              value={preferences.theme}
              onChange={handlePreferencesChange}
              className="w-full p-2 border rounded"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="notifications">
              Notifications
            </label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={preferences.notifications}
              onChange={handlePreferencesChange}
              className="mr-2"
            />
            <label htmlFor="notifications">Enable Notifications</label>
          </div>
          <button
            type="button"
            onClick={savePreferences}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
