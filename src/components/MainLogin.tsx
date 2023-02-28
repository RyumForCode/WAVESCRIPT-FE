import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useLogout from "../hooks/useLogout";

const MainLogin = () => {

    const navigate = useNavigate();

    const [logout] = useLogout();

    const onClickLogout = () => {
        logout();
        window.location.replace('/');
    }

    const onClickCreate = () => {
        navigate('/create-novel');
    }

    const onClickViewAll = () => {
        navigate('/novel-list');
    }

    return (
        <StButtonDiv>
            <StButton onClick = {() => {onClickCreate()}}>Create new novel</StButton>
            <StButton onClick = {() => {onClickViewAll()}}>View all novels</StButton>
            <StButton>Show my novels</StButton>
            <StButton onClick = {() => {onClickLogout()}}>Log out</StButton>
        </StButtonDiv>
    )
}

export default MainLogin;

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