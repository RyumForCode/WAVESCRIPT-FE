import styled from "styled-components";
import CreateNewScript from "../components/CreateNewScript";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import Wrapper from "../components/Wrapper";

const CreateNovel = () => {
    return (
        <Wrapper>
            <HeaderTitle />
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
`