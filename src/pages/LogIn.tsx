import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import LoginBox from '../components/LoginBox';
import TopNavBar from '../components/TopNavBar';
import Wrapper from '../components/Wrapper';
import useIsLogin from '../hooks/useIsLogin';

const LogIn = () => {

    const [isLogin] = useIsLogin();
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogin === true) {
            navigate('/');
        }
    }, [isLogin])

    return (
        <Wrapper>
            <TopNavBar isLogin = {isLogin}/>
            <HeaderTitle>WAVESCRIPT</HeaderTitle>
            <LoginBox />
            <Footer />
        </Wrapper>
    );
};

export default LogIn;