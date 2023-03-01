import styled from "styled-components";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import NovelContentsList from "../components/NovelContentsList";
import TopNavBar from "../components/TopNavBar";
import Wrapper from "../components/Wrapper";
import useIsLogin from "../hooks/useIsLogin";

const NovelList = () => {

    const [isLogin] = useIsLogin();

    return (
        <Wrapper>
            <TopNavBar isLogin = {isLogin}/>
            <HeaderTitle>Novel List</HeaderTitle>
            <StListContainer>
                <StNovelListHeader>
                    <StNLTitle>Novel Title</StNLTitle>
                    <StNLGenre>Genre</StNLGenre>
                    <StNLCreator>Creator</StNLCreator>
                    <StNLContributor>Cntrbtrs</StNLContributor>
                    <StNLStatus>Status</StNLStatus>
                </StNovelListHeader>
                <NovelContentsList />
            </StListContainer>
            <Footer />
        </Wrapper>
    );
};

export default NovelList;

const StListContainer = styled.div`
    width : 60%;
    height : 100%;
    display : flex;
    flex-direction : column;
    
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

const StNovelListHeader = styled.div`
    display : flex;
    justify-content : space-between;
    color : white;
    height : 3rem;
    border-radius : 0.25rem;
    background-color : #303030;
    align-items : center;
    flex-shrink : 0;
`

const StNLTitle = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 50%;
    text-align : left;
    font-family : 'inter';
    font-weight : 700;
`

const StNLGenre = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 15%;
    text-align : left;
    font-family : 'inter';
    font-weight : 700;
`

const StNLCreator = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 15%;
    text-align : left;
    font-family : 'inter';
    font-weight : 700;
`

const StNLContributor = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 10%;
    text-align : left;
    font-family : 'inter';
    font-weight : 700;
`

const StNLStatus = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 10%;
    text-align : left;
    font-family : 'inter';
    font-weight : 700;
`