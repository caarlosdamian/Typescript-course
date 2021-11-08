import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABCD",
      name: "Carlos Damian",
    });
  };
  return (
    <div className="mt-5">
      <h3>Usuario: Usestate</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {!user ? (
        <pre className="mt-5">No hay usuario</pre>
      ) : (
        <pre className="mt-5">{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};
