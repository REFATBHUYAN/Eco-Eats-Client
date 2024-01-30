import React, { useEffect, useState } from "react";

const PrivateRouter = ({ children }) => {
  const adminPassword = "admin@123456";
  const adminUsername = "admin@ecoeats.com";
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [lastLoginTimestamp, setLastLoginTimestamp] = useState(null);

  useEffect(() => {
    // Retrieve the last login timestamp from localStorage
    const storedTimestamp = localStorage.getItem("lastLoginTimestamp");
    if (storedTimestamp) {
      setLastLoginTimestamp(parseInt(storedTimestamp, 10));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("user" , username, "password" , password);
    if (password === adminPassword && username === adminUsername) {
      setAuthenticated(true);

      // Save the current timestamp to localStorage
      const currentTimestamp = new Date().getTime();
      localStorage.setItem("lastLoginTimestamp", currentTimestamp);
      setLastLoginTimestamp(currentTimestamp);
    }
  };

  const isWithinTimeframe = () => {
    if (!lastLoginTimestamp) {
      // No timestamp stored, request login
      return false;
    }

    // Define the time frame (in milliseconds, here set to one day)

    
    // const oneDayInMilliseconds = 1 * 60 * 1000;
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();

    // Check if the last login was within the desired time frame
    return currentTime - lastLoginTimestamp <= oneDayInMilliseconds;
  };

  //   return (
  //     (authenticated || isWithinTimeframe()) && (

  //     )
  //   );
  return authenticated || isWithinTimeframe() ? (
    children
  ) : (
    <div className="my-20 md:my-32 mx-4">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Admin email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setUsername(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Admin password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
            placeholder="Enter your passwords here"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Login As Admin
        </button>
      </form>

      {/* <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form> */}
    </div>
  );
};

export default PrivateRouter;
