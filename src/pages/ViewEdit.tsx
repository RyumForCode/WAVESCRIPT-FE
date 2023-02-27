import HeaderTitle from "../components/HeaderTitle";
import ScriptList from "../components/ScriptList";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import Footer from "../components/Footer";
import Container from "../components/Container";

const ViewEdit = () => {
    return (
        <Wrapper>
            <HeaderTitle />
            <Container>
                <StScriptPropertyDiv>
                    <StScriptPropertyTitle>Novel Script Title</StScriptPropertyTitle>
                    <StScriptPropertyGenre>Genre</StScriptPropertyGenre>
                </StScriptPropertyDiv>
                <ScriptList />
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default ViewEdit;

const StScriptPropertyDiv = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 2rem auto;
    width : 100%;
`

const StScriptPropertyTitle = styled.div`
    font-family : 'inter';
    font-weight : 900;
    font-size : 1.5rem;
`

const StScriptPropertyGenre = styled.div`
    font-family : 'inter';
    font-weight : 900;
    font-size : 1.5rem;
`