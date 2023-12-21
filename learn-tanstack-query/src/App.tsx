import { useProfile } from "@/hooks";

function App() {
  const { data: profile, isLoading, error } = useProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        {profile && (
          <div>
            <p>Name: {profile?.name}</p>
            <p>Email: {profile?.email}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
