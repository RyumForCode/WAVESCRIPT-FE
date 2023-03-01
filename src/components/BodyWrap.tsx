import styled from "styled-components";

const BodyWrap = ({children} : any) => {
    return (
        <StBodyWrap>
            {children}
        </StBodyWrap>
    );
};

export default BodyWrap;

const StBodyWrap = styled.div`
    width : 100%;
    min-height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : center;
`