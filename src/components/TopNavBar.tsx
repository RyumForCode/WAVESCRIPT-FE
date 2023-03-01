import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainLogin from "./MainLogin";
import MainLogout from "./MainLogout";

const TopNavBar = ({isLogin} : {isLogin : boolean}) => {

    const navigate = useNavigate();

    const onClickLogo = () => {
        navigate('/');
    }

    return (
        <StTopNavBar>
            <StTopNavBarTitle onClick = {() => {onClickLogo()}}>WAVESCRIPT</StTopNavBarTitle>
            {isLogin ? <MainLogin /> : <MainLogout />}
        </StTopNavBar>
    );
};

export default TopNavBar;

const StTopNavBar = styled.div`
    height : 4rem;
    background-color : white;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    position : absolute;
    top : 0;
`

const StTopNavBarTitle = styled.div`
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 900;
    height : 2rem;
    color : black;
    margin-left : 2rem;
    cursor : pointer;
    transition : 200ms;
    &:active {
        scale : 1.1;
    }
`