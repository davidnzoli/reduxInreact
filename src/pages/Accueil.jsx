import { useSelector } from "react-redux/";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const Accueil = () => {
    // const [user, setuser] = useState({
    //     email:"",
    //     password:""
    // })

   const state = useSelector((state)=>{
        return state.reducer
    })
    const dispatch = useDispatch();

    const onsubmit = (e)=>{
         e.preventDefault();
         dispatch({
            type:"user/onsubmit",
        }) 
    }
    const onchangee = (e) =>{
         state.email= e.target.value
    }
    // const onchange = (e) =>{
    //     return state.password = e.target.value
    // }

    return (
        <>
            <div className="login">
                <form action="" style={{padding:"20px",display:"flex", 
                flexDirection:"column", 
                justifyContent:"center",
                alignContent:"center",
                gap:"20px",
                width:"100%"}} onSubmit={onsubmit}>
                <input style={{padding:"10px",width:"280px", fontSize:"20px"}} name="email" value={state.email} type='text' placeholder='E-mail' onChange={onchangee}/>
                <input style={{padding:"10px", width:"280px", fontSize:"20px"}} name="password" value={state.password} type="password" placeholder='password'  />
                <button type='submit' style={{padding:"10px",backgroundColor:"blue",width:"180px", color:"white"}}>Envoyer</button> 
                </form>
            </div>
        </>
    )
}
export default Accueil;