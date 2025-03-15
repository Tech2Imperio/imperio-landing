import { useState, useEffect } from "react";
import { State, City } from "country-state-city";
import Image from "next/image";
import BlackLogo from "../../../public/Blacklogo.png";
const states = State.getStatesOfCountry("IN");

const Form = ({ isOpen, onClose, isFloating }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "Maharashtra",
    city: "Mumbai",
    userType: "",
    lookingFor: "",
    message: "",
  });

  const [cities, setCities] = useState([]);
  const [citySearch, setCitySearch] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state

  useEffect(() => {
    if (formData.state) {
      const stateCode = states.find(
        (state) => state.name === formData.state
      )?.isoCode;
      if (stateCode) {
        setCities(
          City.getCitiesOfState("IN", stateCode).map((city) => city.name)
        );
      }
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Get form data
    const formRe = e.target;
    const formDataRe = new FormData(formRe);
    let allFilled = true;
    for (let value of formDataRe.values()) {
      if (!value.trim()) {
        allFilled = false;
        break;
      }
    }

    // If all fields are filled, redirect
    if (allFilled) {
      window.location.href = "https://www.imperiorailing.com/";
    } else {
      alert("Please fill in all fields before submitting.");
    }
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true); // Show success message
      } else {
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${
        isFloating
          ? "fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
          : "relative w-full max-w-lg mx-auto"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-90 lg:w-120 relative">
        {isFloating && (
          <button
            className="absolute top-2 right-4 text-gray-600 text-3xl"
            onClick={onClose}
          >
            &times;
          </button>
        )}

        {isSubmitted ? (
          <div className="flex flex-col justify-center items-center">
            <Image src={BlackLogo} className="w-36" alt="Logo" loading="lazy" />
            <h2 className="text-xl font-semibold text-center p-10">
              Thank you, your form is submitted!
            </h2>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Connect With Us
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded text-gray-600"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-1/2 p-2 border border-gray-300 rounded  text-gray-600"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Phone"
                  className="w-1/2 p-2 border border-gray-300 rounded text-gray-600"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                name="state"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
                value={formData.state}
                required
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="city"
                placeholder="Search City"
                className="w-full p-2 border border-gray-300 rounded text-gray-600"
                value={citySearch}
                onChange={(e) => {
                  setCitySearch(e.target.value);
                  setFormData({ ...formData, city: e.target.value });
                }}
                list="city-options"
                required
              />
              <datalist id="city-options">
                {cities
                  .filter((city) =>
                    city.toLowerCase().startsWith(citySearch.toLowerCase())
                  )
                  .slice(0, 10)
                  .map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </datalist>
              <select
                name="userType"
                className="w-full p-2 border border-gray-300 rounded text-gray-600"
                onChange={handleChange}
                value={formData.userType}
                required
              >
                <option value="">Are you a</option>
                <option>Home Owner</option>
                <option>Architect</option>
                <option>Builder</option>
                <option>Interior Designer</option>
              </select>
              <select
                name="lookingFor"
                className="w-full p-2 border border-gray-300 rounded text-gray-600"
                onChange={handleChange}
                value={formData.lookingFor}
                required
              >
                <option value="">You are looking for</option>
                <option>New construction</option>
                <option>Renovation</option>
              </select>
              <textarea
                name="message"
                placeholder="Let us know what you need"
                className="w-full h-32 p-2 border border-gray-300 rounded resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                SUBMIT
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export { Form };
