import { useState } from "react";
import "./ChangeImagePage.css";

const API_URL =
  "https://httpangular-d0229-default-rtdb.asia-southeast1.firebasedatabase.app/img.json";

const CORRECT_PASSWORD = "cashapp$5";

export default function ChangeImagePage() {
  // ── Password gate ──────────────────────────────────────
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwdShake, setPwdShake] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  // ── Image form ─────────────────────────────────────────
  const [imgUrl, setImgUrl] = useState("");
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [message, setMessage] = useState("");

  // ── Handlers ───────────────────────────────────────────
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setPwdError("");
    } else {
      setPwdError("Incorrect password. Please try again.");
      setPwdShake(true);
      setPassword("");
      setTimeout(() => setPwdShake(false), 600);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ img: imgUrl }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setStatus("success");
      setMessage("Image URL updated successfully!");
      setImgUrl("");
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  const handleBrowsePostImg = () => {
    window.open("https://postimg.cc/", "_blank", "noopener,noreferrer");
  };

  // ── Password Gate Screen ───────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="cip-page">
        <div className={`cip-card${pwdShake ? " cip-card--shake" : ""}`}>
          {/* Header */}
          <div className="cip-header">
            <div className="cip-icon cip-icon--lock">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M7 11V7a5 5 0 0 1 10 0v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h1 className="cip-title">Access Required</h1>
            <p className="cip-subtitle">Enter the password to change the image</p>
          </div>

          {/* Password Form */}
          <form className="cip-form" onSubmit={handlePasswordSubmit} noValidate>
            <div className="cip-field">
              <label className="cip-label" htmlFor="cip-pwd-input">
                Password
              </label>
              <div className="cip-input-wrapper">
                <span className="cip-input-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  id="cip-pwd-input"
                  className="cip-input"
                  type={showPwd ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPwdError("");
                  }}
                  required
                  autoComplete="current-password"
                  autoFocus
                />
                {/* Toggle visibility */}
                <button
                  type="button"
                  className="cip-eye-btn"
                  onClick={() => setShowPwd((v) => !v)}
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error message */}
            {pwdError && (
              <div className="cip-alert cip-alert--error">
                <span className="cip-alert-icon">&#x2715;</span>
                {pwdError}
              </div>
            )}

            <button className="cip-btn" type="submit" id="cip-unlock-btn">
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Image Edit Screen (authenticated) ─────────────────
  return (
    <div className="cip-page">
      <div className="cip-card">
        {/* Header */}
        <div className="cip-header">
          <div className="cip-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
              <path
                d="M21 15l-5-5L5 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="cip-title">Change Image</h1>
          <p className="cip-subtitle">Update the stored image URL in the database</p>
        </div>

        {/* Authenticated badge */}
        <div className="cip-auth-badge">
          <span className="cip-auth-dot" />
          Authenticated
          <button
            className="cip-lock-again"
            onClick={() => {
              setIsAuthenticated(false);
              setPassword("");
              setStatus(null);
              setMessage("");
              setImgUrl("");
            }}
          >
            Lock
          </button>
        </div>

        {/* Form */}
        <form className="cip-form" onSubmit={handleSubmit} noValidate>
          <div className="cip-field">
            <label className="cip-label" htmlFor="cip-img-input">
              Image URL
            </label>
            <div className="cip-input-wrapper">
              <span className="cip-input-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <input
                id="cip-img-input"
                className="cip-input"
                type="url"
                placeholder="https://i.postimg.cc/..."
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
          </div>

          {/* Browse PostImg button */}
          <button
            type="button"
            className="cip-btn cip-btn--secondary"
            id="cip-browse-btn"
            onClick={handleBrowsePostImg}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Browse Images on PostImg
          </button>

          {/* Feedback message */}
          {status && status !== "loading" && (
            <div className={`cip-alert cip-alert--${status}`}>
              <span className="cip-alert-icon">
                {status === "success" ? "\u2713" : "\u2715"}
              </span>
              {message}
            </div>
          )}

          <button
            className={`cip-btn${status === "loading" ? " cip-btn--loading" : ""}`}
            type="submit"
            disabled={status === "loading"}
            id="cip-update-img-btn"
          >
            {status === "loading" ? (
              <>
                <span className="cip-spinner" />
                Updating&#8230;
              </>
            ) : (
              "Update Image"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
