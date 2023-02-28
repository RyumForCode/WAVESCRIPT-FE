import styled from "styled-components";

const Footer = () => {
    return (
        <StFooterDiv>
            <StFooterContent>
                This is Footer contents!
            </StFooterContent>
        </StFooterDiv>
    );
};

export default Footer;

const StFooterDiv = styled.div`
    background-color : #303030;
    margin-top : 4rem;
    width : 100%;
    height : 6rem;
    flex-shrink : 0;
`

const StFooterContent = styled.div`
    font-family : 'inter';
    font-weight : 400;
    font-size : 1rem;
    color : white;
`