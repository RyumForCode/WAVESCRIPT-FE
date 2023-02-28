import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainLogout = () => {

    const navigate = useNavigate();

    const onClickLoginButton = () => {
        navigate('/login');
    }

    const onClickRegisterButton = () => {
        navigate('/register');
    }

    return (
        <StButtonDiv>
            <StButton onClick = {() => {onClickLoginButton()}}>Login</StButton>
            <StButton onClick = {() => {onClickRegisterButton()}}>Register</StButton>
        </StButtonDiv>
    );
};

export default MainLogout;

const StButtonDiv = styled.div`
    display : flex;
    flex-shrink : 0;
    justify-content: flex-end;
    width : 100%;
`

const StButton = styled.button`
    border : none;
    border-radius : 0.25rem;
    background-color : #303030;
    height : 2rem;
    color : white;
    font-family : 'inter';
    font-weight : 700;
    font-size : 1rem;
    padding : 0 1rem;
    margin-right : 1rem;
`