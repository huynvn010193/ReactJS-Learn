import { useState } from "react";
import { useProfile } from "@/hooks";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    data: profile,
    isLoading,
    error,
  } = useProfile({ enabled: isLoggedIn });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleToggleLogin = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        {isLoggedIn && profile && (
          <div>
            <p>Name: {profile?.name}</p>
            <p>Email: {profile?.email}</p>
          </div>
        )}
        <button onClick={handleToggleLogin}>Toggle Login</button>
      </header>
    </div>
  );
}

export default App;
