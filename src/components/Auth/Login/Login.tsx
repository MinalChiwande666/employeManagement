import React, { FormEvent, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login:React.FC = () => {
    const [Erroremail,setErrorEmail] = useState(false)
    const [Errorpassword,setErrorpassword] = useState(false)
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [showPassword,setShowPassword] = useState(false)
    const [value, setValue] = React.useState('HR');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
      };

    const {login} = useAuth()

    const navigate = useNavigate()
    
      const handleSubmit = (e:FormEvent)=>{
        e.preventDefault()
        if(Email==='' && Password==='')
        {
          setErrorEmail(true)
          setErrorpassword(true)
         
        }
        else if(Email==='')
        {
          setErrorEmail(true)
        }
        else if(Password==='')
        {
          setErrorpassword(true)
        }
        else
        {
          setErrorEmail(false)
          setErrorpassword(false)
          login({email:Email,password:Password,role:value})
          navigate('/')
        }
      }
  return (
    <div className='h-[100vh] flex flex-1 bg-gradient-to-tr from-blue-600 to-blue-300 items-center justify-center'>
        <form onSubmit={handleSubmit} className="bg-white grid grid-cols-1 p-3 gap-3 shadow-md rounded-md">

        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
            <div className='flex flex-row items-center'>
                <FormControlLabel value="HR" control={<Radio />} label="HR" />
              
                <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
            </div>
              </RadioGroup>
          </FormControl>
            <input placeholder='Email' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
              if(e.target.value==='')
              {
                setErrorEmail(true)
              }
              else
              {
                setErrorEmail(false)
                setEmail(e.target.value)
              }
            }} type="email" className={`p-3 border ${Erroremail?'outline-red-400':'outline-blue-400'}`}/>


            <div className='relative'>
            <input placeholder='Password' value={Password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
              if(e.target.value==='')
              {
                setErrorpassword(true)
              }else
              {
                setErrorpassword(false)
              }
              setPassword(e.target.value)
            }} type={showPassword?"text":"password"} className={`p-3 border ${Errorpassword?'outline-red-400':'outline-blue-400'}`}/>

              <span onClick={()=>setShowPassword(!showPassword)} className='absolute text-blue-600 right-5 top-3 cursor-pointer'>{showPassword?<VisibilityOffIcon/>:<VisibilityIcon/>}</span>
              </div>


            <button type='submit' className="px-3 py-2 bg-blue-600 text-white rounded-md">Login</button>
            <p className='text-end text-blue-400 text-sm cursor-pointer'>Forgot Password</p>
        </form>
    </div>
  )
}

export default Login