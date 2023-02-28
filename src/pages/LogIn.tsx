import { WhiteModeProvider } from '../components/context/WhiteModeContext';
import HeaderTitle from '../components/HeaderTitle';
import LoginBox from '../components/LoginBox';


const LogIn = () => {
    return (
        <WhiteModeProvider>
            <HeaderTitle />
            <LoginBox />
        </WhiteModeProvider>

    )
};

export default LogIn;


    