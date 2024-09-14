import React, { useState } from "react";
import Layout from "../components/layout";

function Contact() {
  // Contact form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  // Form validation
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.trim().length === 0) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (email.trim().length === 0 || !/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Valid email is required";
      isValid = false;
    }
    if (message.trim().length === 0) {
      tempErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(false);
    setShowFailureMessage(false);
    setShowValidationMessage(false);

    if (handleValidation()) {
      const data = { name, email, message };
      setButtonText("Sending");
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMessage("");
          setShowSuccessMessage(true);
        } else {
          setShowFailureMessage(true);
        }
        setButtonText("Send");
      }).catch(() => {
        setShowFailureMessage(true);
        setButtonText("Send");
      });
    } else {
      setShowValidationMessage(true);
    }
  };

  return (
    <Layout>
      <div className="h-screen bg-gray-50 dark:bg-gray-900 flex items-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
            Contact Form
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-1">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-48 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    placeholder="Leave your message here..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    aria-label="Submit Form"
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {buttonText}
                  </button>
                </div>
                <div className="text-center">
                  {showSuccessMessage && (
                    <p className="text-green-500 text-sm mt-4">
                      Thank you! Your message has been delivered successfully.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-red-500 text-sm mt-4">
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                  {showValidationMessage && (
                    <p className="text-red-500 text-sm mt-4">
                      All fields are required. Please fill them out and try again.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
