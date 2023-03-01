import styled from "styled-components";

const Footer = () => {
    return (
        <StFooterDiv>
            <StFooterContentDiv>
                <StFooterContent>HangHae99 12 Class C Miniproject Group 1</StFooterContent>
                <StFooterContent>Creator : 곽승민, 이인영, 신동윤, 이승운, 황지상</StFooterContent>
            </StFooterContentDiv>
        </StFooterDiv>
    );
};

export default Footer;

const StFooterDiv = styled.div`
    background-color : #303030;
    width : 100%;
    height : 6rem;
    flex-shrink : 0;
    position : absolute;
    bottom : 0;
    transform : translateY(0%);
`

const StFooterContentDiv = styled.div`
    margin : 1.5rem;
    display : flex;
    flex-direction : column;
    gap : 0.5rem;
`

const StFooterContent = styled.div`
    font-family : 'inter';
    font-weight : 400;
    font-size : 0.8rem;
    color : white;
`