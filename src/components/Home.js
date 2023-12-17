import React , {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const host = "http://127.0.0.1:5000";

const Home = () => {

//   const navigate = useNavigate();

//       useEffect( async () => {
//         if(localStorage.getItem('token')){
//           const response = await fetch(`${host}/api/auth/login`,{
//             method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token":localStorage.getItem("token")
//         }
//         });

//         const json = await response.json();

//         console.log(json);

//         }
//         else{
//             navigate("/login");
//         }
//     // eslint-disable-next-line
// }, []);

  return (
    <div>Home</div>
  )
}

export default Home;