import styled from "styled-components";
import useIsLogin from "../hooks/useIsLogin";
import MainLogin from "./MainLogin";
import MainLogout from "./MainLogout";

const Home = () => {

    const [isLogin] = useIsLogin();

    return (
        <StMainContainer>
        </StMainContainer>
    )
}

export default Home;

const StMainContainer = styled.div`
    width : 60%;
    height : 100%;
    display : flex;
    flex-direction : column;
`