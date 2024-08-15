
const isLogin = () =>{
    const token=localStorage.getItem("login")
   
    if(token){
        return true
    }
    else{
        return false
    }
  
}

export default isLogin
