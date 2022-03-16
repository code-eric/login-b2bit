import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [pictureLink, setPictureLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  
  
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
    if(response.ok){
      const json = await JSON.parse(text);
      localStorage.setItem('accessToken', `${json.tokens.access}`);
      localStorage.setItem('refreshToken', `${json.tokens.refresh}`)
      setPictureLink(json.user.avatar.image_medium_url);
      setName(`${json.user.name} ${json.user.last_name}`);
      setRegisteredEmail(json.user.email);
      setIsLoggedIn(true);

    }else{
      setError("invalid email/passowrd")
    }

    console.log(name, pictureLink);
  }
  

  const Logout = () => {
    setIsLoggedIn(false);
    setPictureLink("");
    setName("");
    setRegisteredEmail("");
    setError("")

    localStorage.setItem('accessToken', "");
    localStorage.setItem('refreshToken', "")
  }

  return (
    
    <div className="App">
      { isLoggedIn ? (
          <ProfilePage Logout={Logout} pictureLink={pictureLink} name={name} registeredEmail={registeredEmail} />
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
    
  );
}

export default App;
