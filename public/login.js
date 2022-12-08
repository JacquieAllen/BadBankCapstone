function Login(){

    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
    
    //TODO put firebase config here
        // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
      var firebaseConfig = {
        apiKey: "AIzaSyBTEzvkuW_Gyu_gbNylNDGi62lMbGkF0CI",
        authDomain: "badbank-51e57.firebaseapp.com",
        databaseURL: "https://badbank-51e57-default-rtdb.firebaseio.com",
        projectId: "badbank-51e57",
        storageBucket: "badbank-51e57.appspot.com",
        messagingSenderId: "366099465577",
        appId: "1:366099465577:web:5845b36139f58d2492e9f8"
    };
  // Initialize Firebase
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
    return (
      <Card
        bgcolor="secondary"
        header="Login"
        status={status}
        body={show ? 
          <LoginForm setShow={setShow} setStatus={setStatus}/> :
          <LoginMsg setShow={setShow} setStatus={setStatus}/>}
      />
    ) 
  }
  
  function LoginMsg(props){
    return(<>
      <h5>Login succesfull, Welcome to Bad Bank</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>
          Log Out
      </button>
    </>);
  }
  
  function LoginForm(props){
    const [email, setEmail]        = React.useState('');
    const [password, setPassword]  = React.useState('');
  
    function handle(){
        console.log(email,password);
        const url = `/account/login/${email}/${password}`;
        (async () => {
            var res  = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    }
    return (<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
      <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
     
    </>);
  }