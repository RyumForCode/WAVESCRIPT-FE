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

    const onClickViewAll = () => {
        navigate('/novel-list');
    }

    return (
        <StButtonDiv>
            <StButton onClick = {() => {onClickViewAll()}}>View all novels</StButton>
            <StButton onClick = {() => {onClickLoginButton()}}>Login</StButton>
            <StButton onClick = {() => {onClickRegisterButton()}}>Register</StButton>
        </StButtonDiv>
    );
};

export default MainLogout;

const StButtonDiv = styled.div`
    display : flex;
    justify-content: flex-end;
    width : 100%;
    margin-right : 1rem;
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
    transition : 200ms;
    &:hover {
        background-color : #636363;
    }
`