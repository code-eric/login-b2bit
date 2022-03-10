import React, {useState} from 'react'

function App() {
  const adminUser = {
    admin: "admin@gmail.com",
    password: "1234"
  }


  const [user, setUser] = useState({name:"",password:""})


  return (
    <div className="App">
    </div>
  );
}

export default App;
