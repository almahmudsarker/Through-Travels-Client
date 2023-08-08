import { useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../providers/AuthProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    useEffect(() => {
        // intercept request (client ---> server)
        axiosSecure.interceptors.request.use( config => {
            const token = `Bearer ${localStorage.getItem('access-token')}`
            if(token){
                config.headers.Authorization = token
            }
            return config
        })
        // intercept response (server ---> client)
        axiosSecure.interceptors.response.use( 
            response => response, 
            async error=>{
                if (
                  error.response &&
                  (error.response.status === 401) || (error.response.status === 403)
                ) {
                    await logOut()
                    navigate('/login')
                }
                return Promise.reject(error)
            })
    }, [logOut, navigate, axiosSecure])
    return [axiosSecure]
}

export default useAxiosSecure