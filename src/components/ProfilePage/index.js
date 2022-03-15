function ProfilePage({Logout, pictureLink, name, registeredEmail}){
    //style
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>

    return(
    <div className="welcome">
        <label>Profile Picture</label><br/> 
        <img src={pictureLink} alt="Profile Picture"/><br/><br/>    

        <label htmlFor="name">Your <B>Name</B></label><br/> 
        <input type="text" id="name" name="name" value={name} readOnly></input><br/><br/>    

        <label htmlFor="email">Your <B>Email</B></label><br/>    
        <input type="email" id="email" name="email" value={registeredEmail} readOnly></input><br/><br/>    
        
        <button onClick={Logout}>Logout</button>        
    </div>
    )

}

export default ProfilePage