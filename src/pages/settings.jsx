import React from 'react';
import '../App.css'; 

const Settings = () => {
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="tabs">
        <span className="active-tab">Privacy</span>
        <span>Account</span>
        <span>Help</span>
      </div>
      <div className="settings-section">
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-lock"></i>
            <span>Private profile</span>
          </div>
          <div className="toggle-switch">
            <input type="checkbox" id="private-profile" />
            <label htmlFor="private-profile"></label>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-mention"></i>
            <span>Mentions</span>
          </div>
          <div className="select-wrapper">
            <select name="mentions">
              <option value="everyone">Everyone</option>
              <option value="following">People you follow</option>
              <option value="no_one">No one</option>
            </select>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-hidden-words"></i>
            <span>Hidden Words</span>
          </div>
        </div>
      </div>
      <div className="other-settings">
        <h2>Other privacy settings</h2>
        <p>Some settings, like restrict, apply to both Threads and Instagram and can be managed on Instagram.</p>
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-block"></i>
            <span>Blocked profiles</span>
          </div>
          <i className="icon-external-link"></i>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-hide"></i>
            <span>Hide like and share counts</span>
          </div>
          <i className="icon-external-link"></i>
        </div>
      </div>
    </div>
  );
};

export default Settings;
/*function SettingsModal({ onClose }) {
  return (
    
    <div className="settings-modal">
      <div className="modal-header">
        <h3>Settings</h3>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="modal-content">
        {/*  Sections for Privacy, Account, Help }
        <section className="settings-section">
          <h2>Privacy</h2>
          <ul>
            <li>Private profile</li>
            <li>Mentions</li>
            <li>Hidden Words</li>
            <li>Other privacy settings</li>
          </ul>
        </section>
        <section className="settings-section">
          <h2>Account</h2>
          <ul>
            <li>Blocked profiles</li>
            <li>Hide like and share counts</li>
            {/* Add more options as needed }
          </ul>
        </section>
        <section className="settings-section">
          <h2>Help</h2>
          <p>Visit our help center for more information.</p>
          {/* Add a link to your help center }
        </section>
      </div>
    </div>
  );
}

export default SettingsModal;*/