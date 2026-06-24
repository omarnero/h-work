import { useState } from "react";
import "./Login.css";
export default function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);

    const handleNameChange = (event) => {
        if (!nameTouched) {
            setNameTouched(true);
        }
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        if (!emailTouched) {
            setEmailTouched(true);
        }
        setEmail(event.target.value);
    };

    const handleNameBlur = () => {
        setNameTouched(true);
    };

    const handleEmailBlur = () => {
        setEmailTouched(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // For now, just log values; can be replaced with real submit logic.
        console.log("Submitted:", { name, email });
    };

    const isButtonDisabled =
        !nameTouched ||
        !emailTouched ||
        name.trim().length === 0 ||
        email.trim().length === 0;

    const showNameError = nameTouched && name.trim().length === 0;
    const showEmailError = emailTouched && email.trim().length === 0;

    return (
        <section className="landing-page">
            <div className="landing-page-image"></div>
            <div className="App">
                <div className="login-container">
                    {/* <h1 className="login-title">Hesham work</h1> */}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="name" className="field-label">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="field-input"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={handleNameChange}
                                onBlur={handleNameBlur}
                            />
                            {showNameError && (
                                <div className="field-error">Name is required</div>
                            )}
                        </div>

                        <div className="form-field">
                            <label htmlFor="email" className="field-label">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="field-input"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                            />
                            {showEmailError && (
                                <div className="field-error">Email is required</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isButtonDisabled}
                            onClick={() => {
                                // window.location.href = "https://consumertestconnect.com/cash-750";
                            }}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}