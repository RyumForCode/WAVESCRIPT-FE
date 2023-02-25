import styled from "styled-components";

const Wrapper = ({ children } : {children : any}) => {
    return (
        <StWrapper>
            {children}
        </StWrapper>
    );
};

export default Wrapper;

const StWrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : stretch;
`

// Have to get div with children