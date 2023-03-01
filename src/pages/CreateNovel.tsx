import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateNewScript from "../components/CreateNewScript";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import TopNavBar from "../components/TopNavBar";
import Wrapper from "../components/Wrapper";
import useIsLogin from "../hooks/useIsLogin";

const CreateNovel = () => {

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
            <HeaderTitle>Create New Novel</HeaderTitle>
            <StCreateContainer>
                <CreateNewScript />
            </StCreateContainer>
            <Footer />
        </Wrapper>
    );
};

export default CreateNovel;

const StCreateContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    margin : auto;
    width : 60%;

    animation: fadein 400ms;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`