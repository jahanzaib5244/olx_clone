import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { doSignup } from '../store/action/Authaction'


export default function UseSignup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    const doSignupUser = ()=>{
        let user = {
            email,
            password
        }
        dispatch(doSignup(user))
    }

    return [setEmail,setPassword,doSignupUser]
}
