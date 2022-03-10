import React, {useState} from 'react'

function App() {
  const adminUser = {
    admin: "admin@gmail.com",
    password: "1234"
  }


  const [user, setUser] = useState({name:"",password:""});
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("logout");
  }

  return (
    
    <div className="App">
      {(user.email != "") ?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>        
        </div>):(
          <LoginForm />
        )
      }
    </div>
  );
}

export default App;
