
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            className="w-full mb-2 p-2 border rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full mb-4 p-2 border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-green-600 text-white p-2 rounded">
            Register
          </button>
        </form>
        <button
          className="w-full mt-3 bg-red-500 text-white p-2 rounded"
        >
          Sign up with Google
        </button>
        <button
          className="w-full mt-2 bg-blue-700 text-white p-2 rounded"
        >
          Sign up with Facebook
        </button>
      </div>
    </div>
  );
}

export default Signup;
