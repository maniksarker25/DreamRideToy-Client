
import { authContext } from '../Provider/AuthProvider';
import LoadingSpiner from '../Pages/LoadingSpiner/LoadingSpiner';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <LoadingSpiner/>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoute;