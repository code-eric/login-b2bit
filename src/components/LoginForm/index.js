import React, {useState} from 'react'
import {Container, Content} from './styles'
import logo from '../../assets/B2BitLogo.png'

function LoginForm({Login, error}) {
  const [details, setDetails] = useState({email:"", password:""});

  const submitHandler = e=>{
    e.preventDefault();

    Login(details);
  }

  return (
    <Container>
      <Content>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <img src={logo} alt="Profile Picture" className='logo'/><br/>
                {(error != "") ? (<div className="error">{error}</div>) : "" }

            </div>
            <div className='form-block'>
              <div className="form-group">
                  <label htmlFor='email'>Email:</label><br/>
                  <input type="email" name='email' id='email' onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
              </div>
              <div className="form-group">
                  <label htmlFor='password'>Password:</label><br/>
                  <input type="password" name='password' id='password' onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
              </div>
              <input type="submit" value="Sign in" className="submit"/>
            </div>
        </form>
      </Content>
    </Container>
  )
}

export default LoginForm