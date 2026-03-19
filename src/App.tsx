import { useState } from "react";
import UserForm from "./components/UserForm";

function App() {
  const [typeUser, setTypeUse] = useState([
    { id: 1, omschrijving: "leerling" },
    { id: 2, omschrijving: "leerkracht" },
    { id: 3, omschrijving: "administratief medewerker" },
  ]);
  const [users, setUsers] = useState<string[]>([]);

  const handleSubmit = (user?: string) => {
    // setUsers --> add user
    if (user != null) setUsers([...users, user]);
  };
  return (
    <>
      <UserForm onSubmit={() => handleSubmit} />
    </>
  );
}

export default App;
