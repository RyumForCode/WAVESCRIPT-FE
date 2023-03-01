import styled from "styled-components";

const Container = ({ children } : { children : any }) => {
    return (
        <StContainer>
            {children}
        </StContainer>
    );
};

export default Container;

const StContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
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