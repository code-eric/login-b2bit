import {Container, Content} from './styles'

function ProfilePage({Logout, pictureLink, name, registeredEmail}){
    //style
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>

    return(
    <Container>
        <Content>
            <button onClick={Logout} className="logoutButton">Logout</button> 

            <div className="profile">
                <label className='pictureLabel'>Profile Picture</label><br/> 
                <img src={pictureLink} alt="Profile Picture"/><br/><br/>    

                <div className="form-block">
                    <label htmlFor="name">Your <B>Name</B></label><br/> 
                    <input type="text" id="name" name="name" value={name} readOnly></input>

                    <label htmlFor="email">Your <B>Email</B></label><br/>    
                    <input type="email" id="email" name="email" value={registeredEmail} readOnly></input>
                </div>           
            </div>
        </Content>
    </Container>
    )

}

export default ProfilePage