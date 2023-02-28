import { useQuery } from "react-query";
import styled from "styled-components";
import { scriptBrowseAll } from "../api/script";
import NovelContent from "./NovelContent";

const NovelContentsList = () => {

    const { isLoading, isError, data } = useQuery('browseAll', () => scriptBrowseAll())

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>

    console.log(data);

    return (
        <StContentsListDiv>
            {data?.data.scripts.map((val : {UserId : number, content : string, createdAt : string, genre : string, scriptId : number, title : string, updatedAt : string}) => <NovelContent key = {val.scriptId} data = {val} />)}
        </StContentsListDiv>
    );
};


export default NovelContentsList;

const StContentsListDiv = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
`