import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import TopNavBar from "../components/TopNavBar";
import Wrapper from "../components/Wrapper";
import useIsLogin from "../hooks/useIsLogin";

const MyPage = () => {

    const [isLogin] = useIsLogin(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogin === false) {
            navigate('/');
        }
    }, [isLogin])

    return (
        <Wrapper>
            <TopNavBar isLogin = {isLogin}/>
            <HeaderTitle />
            <Footer />
        </Wrapper>
    )
}

export default MyPage;