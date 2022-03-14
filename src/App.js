import React, {useState} from 'react'
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    admin: "admin@gmail.com",
    password: "1234"
  }


  const [user, setUser] = useState({email:""});
  const [error, setError] = useState("");
  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");
  
  const Login = details => {
    
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    "email": details.email,
    "password": details.password
  });
  
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://frontendproject.b2bit.company/account/tokens/", requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(result =>{
      console.log(result)
      setAccess(result.tokens.access)
      setRefresh(result.tokens.refresh)
      
    })
    .then(console.log(access))
    .catch(error => console.log('error', error));
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
