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

    const onClickMyPage = () => {
        navigate('/my-novels');
    }

    return (
        <StButtonDiv>
            <StButton onClick = {() => {onClickCreate()}}>Create new novel</StButton>
            <StButton onClick = {() => {onClickViewAll()}}>View all novels</StButton>
            <StButton onClick = {() => {onClickMyPage()}}>Show my novels</StButton>
            <StButton onClick = {() => {onClickLogout()}}>Log out</StButton>
        </StButtonDiv>
    )
}

export default MainLogin;

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