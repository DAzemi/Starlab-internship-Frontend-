import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function CustomerSupportPage() {
  const user = useSelector((state) => state.user?.token?.userId);
  const [problem, setProblem] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notificationStatus, setNotificationStatus] = useState(null);

  // State variables to track empty state
  const [problemEmpty, setProblemEmpty] = useState(false);
  const [detailsEmpty, setDetailsEmpty] = useState(false);
  const [nameEmpty, setNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);

  const handleEmailLinkClick = async () => {
    try {
      // Check if any field is empty and set corresponding state variables
      setProblemEmpty(problem.trim() === "");
      setDetailsEmpty(details.trim() === "");
      setNameEmpty(name.trim() === "");
      setEmailEmpty(email.trim() === "");

      // Check if any field is empty
      if (problem.trim() === "" || details.trim() === "" || name.trim() === "" || email.trim() === "") {
        // Handle the case when any field is empty, for example, show an alert
        alert("Please fill in all the required fields.");
        return;
      }

      // Your existing code for making the API call
      const response = await axios.post("http://localhost:4000/api/insertCustomerSupportEmail", {
        user_id: user,
        issuer_name: name,
        email,
        email_subject: problem,
        email_body: details,
      });

      setNotificationStatus(response.status);

      // Clear the input fields on success
      if (response.status === 200) {
        setProblem("");
        setDetails("");
        setName("");
        setEmail("");
      }

      // Reset the notification status after 3 seconds
      setTimeout(() => {
        setNotificationStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      // Set the notification status to indicate an error
      setNotificationStatus("error");

      // Reset the notification status after 3 seconds
      setTimeout(() => {
        setNotificationStatus(null);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="bg-blue-600 h-40 w-full flex items-center justify-center">
        <p className="text-white text-4xl font-semibold">Customer Support</p>
      </div>
      <div className="p-2"></div>

      <div className="flex lg:justify-start gap-5 max-md:max-w-full max-md:flex-wrap mb-2 ml-4 mr-2">
        <div className="sm:w-full lg:w-2/6 md:w-2/4 lg:ml-10 sm:mx-5">
          <div className=""></div>
        </div>
      </div>

      <div className="flex justify-end ">
        {notificationStatus !== null && (
          <div
            className={` border-l-8 border-t-8 p-3 my-4 mr-5 rounded-3xl w-80 z-50 ${
              notificationStatus === 200 ? "border-gray-400 bg-blue-500" : "border-gray-600 bg-red-400"
            }`}
            role="alert"
          >
            <p className="text-white  text-center font-bold">
              {notificationStatus === 200 ? "Your message sent" : "Error sending message"}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center ">
        <div className="lg:w-1/2 rounded-lg  border-stone-400 shadow-2xl mt-10 lg:ml-12 ml-2 mr-2 mb-20">
          <div className="flex flex-col lg:w-4/5 md:max-w-full ml-10 justify-center  ">
            <div className="lg:mb-4  mb-10 lg:mt-18  md:mt-10 mr-10">
              <p className=" text-black lg:text-2xl md:text-2xl text-2xl font-normal  lg:mb-5 mb-4  lg:mt-1 mt-28 md:mt-10 lg:ml-1 font-['Poppins']">
                Describe the problem you have:
              </p>
              <input
                className={`w-full shadow-md border ${
                  problemEmpty ? "border-red-500" : "border-neutral-200"
                } p-2 font-semibold rounded`}
                type="text"
                placeholder="Write your problem here..."
                value={problem}
                onChange={(e) => {
                  setProblem(e.target.value);
                  setProblemEmpty(e.target.value.trim() === "");
                }}
              />
            </div>

            <div className="lg:mt-10 mt-10 mr-10 ">
              <p className="text-black lg:text-2xl text-2xl font-normal lg:mb-5 mb-4 font-['Poppins']">
                Give us details of your problem:
              </p>
              <textarea
                className={`w-full p-2 shadow-md border ${
                  detailsEmpty ? "border-red-500" : "border-neutral-200"
                } mr-10 font-semibold rounded`}
                placeholder="Write the details here..."
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                  setDetailsEmpty(e.target.value.trim() === "");
                }}
                rows={6}
              />
            </div>

            <div className="flex mt-20">
              <div className="mr-2 mb-2">
                <p className="mb-4 text-black text-2xl font-normal font-['Poppins']">Your contact details:</p>

                <div className="mb-4">
                  <input
                    className={`w-full p-2 border shadow font-semibold rounded ${
                      nameEmpty ? "border-red-500" : "border-neutral-200"
                    } contact-input`}
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameEmpty(e.target.value.trim() === "");
                    }}
                  />
                </div>

                <div>
                  <input
                    className={`w-full p-2 shadow border font-semibold rounded ${
                      emailEmpty ? "border-red-500" : "border-neutral-200"
                    } contact-input`}
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailEmpty(e.target.value.trim() === "");
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mt-5">
                <button
                  onClick={handleEmailLinkClick}
                  className="bg-blue-600 text-white font-semibold  px-4 py-2 rounded"
                >
                  Email us
                </button>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSupportPage;
