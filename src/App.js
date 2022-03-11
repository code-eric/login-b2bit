import React, {useState} from 'react'
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    admin: "admin@gmail.com",
    password: "1234"
  }


  const [user, setUser] = useState({email:""});
  const [error, setError] = useState("");

  const Login = details => {
    //console.log(details);
    

    /*
    if(details.username === adminUser.username && details.password === adminUser.password){
      setUser({
        name: details.name,
        email: details.email
      })
    }else{
      setError("details do not match")
    }
    */
    console.log(details)
    fetch('https://frontendproject.b2bit.company/account/tokens/',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(details)
    }).then((response) => {
      if (response.ok) {
        setUser({
          name: details.name,
          email: details.email
        })
      }else{
        setError("details do not match")
      }
      
    })


  }

  const Logout = () => {
    setUser({email:""});
    setError("")
  }

  return (
    
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Email is: <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>        
        </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
  );
}

export default App;
