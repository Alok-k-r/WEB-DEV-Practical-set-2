import React, { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const userData = { name: "Alok", role: "Student" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>React Context API Demo</h2>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}


function Parent() {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h3>Parent Component</h3>
      <Child />
    </div>
  );
}


function Child() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid blue", padding: "10px", marginTop: "10px" }}>
      <h4>Nested Child Component</h4>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default App;
