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
    const [isVerified,setVerified] = useState(false);
    const [isManager,setManager] = useState(false);
    const [currentUser,setCurrentUser] = useState();
    const [isAuthenticated,setIsAuthenticated] = useState();
    const [hasError,setHasError] = useState(false);
    const [message,setMessage] = useState();

    const login = (email,password,isManager)=>{
        setManager(isManager);
        fetch(`http://localhost:5000/api/${isManager?'managers':'users'}/login`,{
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
                setVerified(res.verified);
                console.log(res);
                localStorage.setItem('token',res.token);
                localStorage.setItem('userData',JSON.stringify(res));
            }
        })
    }

    const logout = ()=>{
        setCurrentUser(null);
        setHasError(null);
        setIsAuthenticated(false);
        setMessage(false);
        setVerified(false);
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }

    const signUp = (data)=>{
        fetch('http://localhost:5000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: data.fullName,
            email: data.email,
            password: data.password,
            year: data.year,
            branch: data.branch,
            section: data.section,
          }),
        })
        .then((res) => {
            if (!res.ok) {
                setHasError(true);
            }
            return res.json();
        })
        .then((res) => {
            console.log(res);
            if (res.message) {
                setMessage(res.message);
            } else {
                setIsAuthenticated(true);
                setCurrentUser(res);
                setVerified(false);
                console.log(res);
                localStorage.setItem('token', res.token);
                localStorage.setItem('userData', JSON.stringify(res));
            }
        });
    }

    const handleAuthentication = (data)=>{
        setIsAuthenticated(true);
        setHasError(null);
        setMessage(null);
    }


    const value={
        isAuthenticated,
        login,
        logout,
        user:currentUser,
        signUp,
        message,
        hasError,
        handleAuthentication,
        isManager
    }


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;