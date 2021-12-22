import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated : null,
    login:()=>{},
    logout:()=>{},
    signUp:()=>{},
    hasError :false,
    message:null,
    user:{}
})

const AuthContextProvider = ({children})=>{

    const [currentUser,setCurrentUser] = useState();
    const [isAuthenticated,setIsAuthenticated] = useState();
    const [hasError,setHasError] = useState(false);
    const [message,setMessage] = useState();

    const login = (email,password)=>{
        fetch('http://localhost:5000/api/users/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        .then((res) => {
            if(!res.ok){
                setHasError(true);
            }
            return res.json();
        }).then(res =>{
            console.log(res)
            if(res.message){
                setMessage(res.message);
            }
            else{
                setIsAuthenticated(true);
                setCurrentUser(res);
                console.log(res);
                localStorage.setItem('token',res.token);
                localStorage.setItem('userId',res.userId);
            }
        })
    }

    const logout = ()=>{
        setCurrentUser(null);
        setHasError(null);
        setIsAuthenticated(false);
        setMessage(false);
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
    }

    const signUp = (data)=>{
        fetch('http://localhost:5000/api/users/signup',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:{
                fullname:data.fullname,
                email:data.email,
                password:data.password,
                year:data.year,
                branch:data.branch,
                password:data.password
            }
        })
    }

    const value={
        isAuthenticated,
        login,
        logout,
        user:currentUser,
        signUp,
        message,
        hasError
    }


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;