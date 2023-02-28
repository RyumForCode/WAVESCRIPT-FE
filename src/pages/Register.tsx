import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import RegisterBox from '../components/RegisterBox';
import Wrapper from '../components/Wrapper';
import useIsLogin from '../hooks/useIsLogin';

const Register = () => {

    const [isLogin] = useIsLogin();
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogin === true) {
            navigate('/');
        }
    }, [isLogin])

    return (
        <Wrapper>
            <HeaderTitle />
            <RegisterBox />
            <Footer />
        </Wrapper>
    );
};

export default Register;