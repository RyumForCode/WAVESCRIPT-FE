import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

const useIsLogin = () => {

    const [isLogin, setIsLogin] = useState(false);
    const cookies = new Cookies();

    useEffect(() => {
        if(cookies.get('authorization')) {
            setIsLogin(true);
        }
    }, [])

    return [isLogin];
};

export default useIsLogin;