import styled from "styled-components";
import MainLogin from "./MainLogin";
import MainLogout from "./MainLogout";

const TopNavBar = ({isLogin} : {isLogin : boolean}) => {
    return (
        <StTopNavBar>
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
    justify-content : center;
    align-items : center;
`