import { useState } from "react";
import "./ChangeUrlPage.css";

const API_URL =
  "https://httpangular-d0229-default-rtdb.asia-southeast1.firebasedatabase.app/url.json";

export default function ChangeUrlPage() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [message, setMessage] = useState("");

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
