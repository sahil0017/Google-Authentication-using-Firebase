import React from 'react';
import logo from './logo.svg';
import { auth ,provider} from './Firebase/firebase'
import { useDispatch , useSelector } from 'react-redux';
import './App.css';
import { selectUserEmail, selectUserName, setActiveUser , setUserLogoutState } from './features/userSlice'

function App() {

  const dispatch=useDispatch();
  const userName=useSelector(selectUserName)
  const userEmail=useSelector(selectUserEmail);

  const handleSignIn = () =>{
    auth.signInWithPopup(provider).then(res => {
      dispatch(setActiveUser({
        userName: res.user.displayName,
        userEmail:res.user.email
      }))
    })

  }

  const handleSignOut = ()=> {
    auth.signOut().then( ()=>{
      dispatch(setUserLogoutState())
    }).catch(err => {
      alert(err.message)
    })
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          userName?(
            <button onClick={handleSignOut}>SignOut</button>
          ):(
            <button onClick={handleSignIn}>SignIN</button>
          )
        }
        
      </header>
    </div>
  );
}

export default App;
