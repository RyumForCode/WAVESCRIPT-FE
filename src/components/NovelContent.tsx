import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NovelContent = ({data} : {data : {UserId : number, content : string, createdAt : string, genre : string, scriptId : number, title : string, updatedAt : string}}) => {

    const navigate = useNavigate();

    return (
        <StNovelContent onClick = {() => {navigate(`/view-edit/${data.scriptId}`)}}>
            <StNLTitle>{data.title}</StNLTitle>
            <StNLGenre>{data.genre}</StNLGenre>
            <StNLCreator>{data.UserId}</StNLCreator>
            <StNLContributor>{`NR`}</StNLContributor>
            <StNLStatus>{`NR`}</StNLStatus>
        </StNovelContent>
    );
};

export default NovelContent;

const StNovelContent = styled.div`
    display : flex;
    justify-content : space-between;
    height : 2rem;
    align-items : center;
    margin-top : 1rem;
`

const StNLTitle = styled.div`
    width : 50%;
    text-align : left;
    flex-shrink : 0;
`

const StNLGenre = styled.div`
    width : 15%;
    text-align : left;
    flex-shrink : 0;
`

const StNLCreator = styled.div`
    width : 15%;
    text-align : left;
    flex-shrink : 0;
`

const StNLContributor = styled.div`
    width : 10%;
    text-align : left;
    flex-shrink : 0;
`

const StNLStatus = styled.div`
    width : 10%;
    text-align : left;
    flex-shrink : 0;
`