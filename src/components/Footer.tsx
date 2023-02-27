import styled from "styled-components";

const Footer = () => {
    return (
        <StFooterDiv>
            This is Footer contents!
        </StFooterDiv>
    );
};

export default Footer;

const StFooterDiv = styled.div`
    height : 128px;
    background-color : #303030;
    margin-top : 4rem;
    width : 100%;
`