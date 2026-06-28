import { useState } from "react";
import "./ChangeUrlPage.css";

const API_URL =
  "https://httpangular-d0229-default-rtdb.asia-southeast1.firebasedatabase.app/url.json";

const CORRECT_PASSWORD = "cashapp$5";

export default function ChangeUrlPage() {
  // ── Password gate ──────────────────────────────────────
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwdShake, setPwdShake] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  // ── URL form ───────────────────────────────────────────
  const [url, setUrl] = useState("");
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
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setStatus("success");
      setMessage("URL updated successfully!");
      setUrl("");
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  // ── Password Gate Screen ───────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="cup-page">
        <div className={`cup-card${pwdShake ? " cup-card--shake" : ""}`}>
          {/* Header */}
          <div className="cup-header">
            <div className="cup-icon cup-icon--lock">
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
            <h1 className="cup-title">Access Required</h1>
            <p className="cup-subtitle">Enter the password to edit the URL</p>
          </div>

          {/* Password Form */}
          <form className="cup-form" onSubmit={handlePasswordSubmit} noValidate>
            <div className="cup-field">
              <label className="cup-label" htmlFor="pwd-input">
                Password
              </label>
              <div className="cup-input-wrapper">
                <span className="cup-input-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  id="pwd-input"
                  className="cup-input"
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
                  className="cup-eye-btn"
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
              <div className="cup-alert cup-alert--error">
                <span className="cup-alert-icon">✕</span>
                {pwdError}
              </div>
            )}

            <button className="cup-btn" type="submit" id="unlock-btn">
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── URL Edit Screen (authenticated) ───────────────────
  return (
    <div className="cup-page">
      <div className="cup-card">
        {/* Header */}
        <div className="cup-header">
          <div className="cup-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="cup-title">Change URL</h1>
          <p className="cup-subtitle">Update the stored URL in the database</p>
        </div>

        {/* Authenticated badge */}
        <div className="cup-auth-badge">
          <span className="cup-auth-dot" />
          Authenticated
          <button
            className="cup-lock-again"
            onClick={() => {
              setIsAuthenticated(false);
              setPassword("");
              setStatus(null);
              setMessage("");
              setUrl("");
            }}
          >
            Lock
          </button>
        </div>

        {/* Form */}
        <form className="cup-form" onSubmit={handleSubmit} noValidate>
          <div className="cup-field">
            <label className="cup-label" htmlFor="url-input">
              URL
            </label>
            <div className="cup-input-wrapper">
              <span className="cup-input-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <input
                id="url-input"
                className="cup-input"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
          </div>

          {/* Feedback message */}
          {status && status !== "loading" && (
            <div className={`cup-alert cup-alert--${status}`}>
              <span className="cup-alert-icon">
                {status === "success" ? "✓" : "✕"}
              </span>
              {message}
            </div>
          )}

          <button
            className={`cup-btn${status === "loading" ? " cup-btn--loading" : ""}`}
            type="submit"
            disabled={status === "loading"}
            id="update-url-btn"
          >
            {status === "loading" ? (
              <>
                <span className="cup-spinner" />
                Updating…
              </>
            ) : (
              "Update URL"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
