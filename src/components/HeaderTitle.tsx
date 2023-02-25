import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderTitle = () => {

    const navigate = useNavigate();

    return (
        <StHeaderDiv>
            <StHeaderTitle onClick = {() => {navigate('/')}}>WAVESCRIPT</StHeaderTitle>
        </StHeaderDiv>
    );
};

export default HeaderTitle;

const StHeaderDiv = styled.div`
    margin : auto;
    height : 128px;
    display : flex;
    align-items : center;
`

const StHeaderTitle = styled.div`
    font-family : 'inter';
    font-size : 4rem;
    font-weight : 900;
    letter-spacing : -0.1rem;
`