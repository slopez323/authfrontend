import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Auth";

const LoginPage = ({ isAuthLoading, setIsAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          setIsAuthLoading(true);
          const loginSuccess = await loginUser(username, password);
          if (loginSuccess) {
            setIsAuthLoading(false);
            navigate("/");
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
