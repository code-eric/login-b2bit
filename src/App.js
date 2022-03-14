import React, {useState} from 'react'
import LoginForm from './components/LoginForm';

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [error, setError] = useState("");
  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");
  const [name, setName] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [pictureLink, setPictureLink] = useState("");


  let test = 1;
  
  const Login = async details => {
    
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

      
    const response = await fetch("https://frontendproject.b2bit.company/account/tokens/", requestOptions);
    const text = await response.text();
    const json = await JSON.parse(text);
    setAccess(json.tokens.access);
    setRefresh(json.tokens.refresh);
    setPictureLink(json.user.avatar.image_medium_url);
    setName(`${json.user.name} ${json.user.last_name}`);
    setLoginEmail(json.user.email);

    console.log(name, pictureLink);
  }
  

  const Logout = () => {
    setLoginEmail("");
    setError("")
  }

  return (
    
    <div className="App">
      {(loginEmail != "") ? (
        <div className="welcome">
          <h2>Email is: <span>{loginEmail}</span></h2>
          <button onClick={Logout}>Logout</button>        
        </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
  );
}

export default App;
