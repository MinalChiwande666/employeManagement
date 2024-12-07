import {createContext,ReactNode,useContext, useState} from 'react'


interface AuthContextProp{
    user:any,
    login: (value:any)=>void,
    logout: ()=> void
}

const AuthContext = createContext<AuthContextProp | any>(undefined)

export const AuthProvider:React.FC<{children:ReactNode}> = ({children})=>{
    const [user,setUser] = useState(null)

    const login = (value:any)=>{
        setUser(value)
    }

   const logout = ()=>{
    setUser(null)
   }
     return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
     )
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)

    if(context === undefined)
        {
            throw new Error('useAuth must be used within an AuthProvider')
        }
    
        return context

}