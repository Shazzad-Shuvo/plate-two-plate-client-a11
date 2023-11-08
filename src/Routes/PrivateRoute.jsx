import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    // console.log(location.pathname);


    if (loading) {
        return <span className="loading loading-spinner loading-lg text-primary mt-72 ml-[620px]"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' />;

};

export default PrivateRoute;