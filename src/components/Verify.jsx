import { Navigate } from "react-router-dom";

const Verify = ({children}) => {
    let isVerify = false

    if(!isVerify){
        return <Navigate to="/" />
    }
    return children;
}
export default Verify;