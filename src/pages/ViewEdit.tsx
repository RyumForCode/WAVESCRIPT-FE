import HeaderTitle from "../components/HeaderTitle";
import ScriptList from "../components/ScriptList";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { scriptInspect } from "../api/script";
import TopNavBar from "../components/TopNavBar";
import useIsLogin from "../hooks/useIsLogin";

const ViewEdit = () => {

    const [isLogin] = useIsLogin();

    const params = useParams();
    const { isLoading, isError, data } = useQuery('scriptInspect', () => scriptInspect({id : Number(params.id)}));

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>

    console.log(data)

    return (
        <Wrapper>
            <TopNavBar isLogin = {isLogin}/>
            <HeaderTitle />
            <Container>
                <StScriptPropertyDiv>
                    <StScriptPropertyTitle>{data?.data.script.script.title}</StScriptPropertyTitle>
                    <StScriptPropertyGenre>{data?.data.script.script.genre}</StScriptPropertyGenre>
                </StScriptPropertyDiv>
                <ScriptList scriptData = {data?.data.script} />
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