// Jisang

import styled from "styled-components";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import NovelContentsList from "../components/NovelContentsList";
import Wrapper from "../components/Wrapper";

const NovelList = () => {
    return (
        <Wrapper>
            <HeaderTitle />
            <StListContainer>
                <StNovelListHeader>
                    <StNLTitle>Novel Title</StNLTitle>
                    <StNLGenre>Genre</StNLGenre>
                    <StNLCreator>Creator</StNLCreator>
                    <StNLContributor>Contributers</StNLContributor>
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
`

const StNovelListHeader = styled.div`
    display : flex;
    justify-content : space-between;
    color : white;
    height : 2rem;
    background-color : #303030;
    border-radius : 0.25rem;
    align-items : center;
    flex-shrink : 0;
`

const StNLTitle = styled.div`
    flex-grow : 60;
    text-align: center;
    font-family : 'inter';
    font-weight : 700;
`

const StNLGenre = styled.div`
    flex-grow : 10;
    text-align: center;
    font-family : 'inter';
    font-weight : 700;
`

const StNLCreator = styled.div`
    flex-grow : 10;
    text-align: center;
    font-family : 'inter';
    font-weight : 700;
`

const StNLContributor = styled.div`
    flex-grow : 10;
    text-align: center;
    font-family : 'inter';
    font-weight : 700;
`

const StNLStatus = styled.div`
    flex-grow : 10;
    text-align: center;
    font-family : 'inter';
    font-weight : 700;
`