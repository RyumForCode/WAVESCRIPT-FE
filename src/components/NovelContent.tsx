import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NovelContent = ({data} : {data : {UserId : number, id : string, createdAt : string, genre : string, scriptId : number, title : string, updatedAt : string}}) => {

    const navigate = useNavigate();
    if (data === null) return <StNovelContent>There's no Novel on you.</StNovelContent>
    return (
        <StNovelContent onClick = {() => {navigate(`/view-edit/${data.scriptId}`)}}>
            <StNLTitle>{data.title}</StNLTitle>
            <StNLGenre>{data.genre}</StNLGenre>
            <StNLCreator>{data.id}</StNLCreator>
            <StNLContributor>{`NR`}</StNLContributor>
            <StNLStatus>{`NR`}</StNLStatus>
        </StNovelContent>
    );
};

export default NovelContent;

const StNovelContent = styled.div`
    display : flex;
    justify-content : space-between;
    height : 4rem;
    align-items : center;
    background-color : white;
    border-radius : 0.25rem;
    margin-top : 1rem;
    color : #787878;
    cursor : pointer;
    transition : 200ms;
    &:hover {
        scale : 1.025;
        box-shadow : 0px 0px 1rem rgba(0, 0, 0, .1);
        font-weight : 700;
        color : black;
    }
`

const StNLTitle = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 50%;
    text-align : left;
    flex-shrink : 0;
`

const StNLGenre = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 15%;
    text-align : left;
    flex-shrink : 0;
`

const StNLCreator = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 15%;
    text-align : left;
    flex-shrink : 0;
`

const StNLContributor = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 10%;
    text-align : left;
    flex-shrink : 0;
`

const StNLStatus = styled.div`
    box-sizing : border-box;
    padding-left : 1rem;
    width : 10%;
    text-align : left;
    flex-shrink : 0;
`