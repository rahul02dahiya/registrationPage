import React , {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/home.css'

const host = "http://127.0.0.1:5000";


const Home = () => {

  const navigate = useNavigate();
  const [userName,setUserName] = useState("")
 
  const getUserData = async ()=>{
      const response = await fetch(`${host}/api/auth/getuser`,{
            method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("token")
        }
        });

        const json = await response.json();
        setUserName(json.name);
  }

      useEffect( () => {
        if(localStorage.getItem('token')){
          getUserData();
        }
        else{
            navigate("/login");
        }
}, []);

  return (
    <div className='home'>
      <ul className="logout-bar d-flex p-2 justify-content-between">
        <i>Hello <strong>{`${userName}`}</strong> welcome to peace : )</i>
        <button className='btn btn-outline-light' onClick={()=>{localStorage.removeItem("token"); navigate("/login")}}><i className="fa-solid fa-up-right-from-square"></i></button>
      </ul>
    </div>
  )
}

export default Home;