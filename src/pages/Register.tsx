import { WhiteModeProvider } from '../components/context/WhiteModeContext';
import HeaderTitle from '../components/HeaderTitle';
import RegisterBox from '../components/RegisterBox';

const Register = () => {
    return (
        <WhiteModeProvider>
            <HeaderTitle />
            <RegisterBox />
        </WhiteModeProvider>
        
    );
};

export default Register;



