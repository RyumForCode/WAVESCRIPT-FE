import { motion } from "framer-motion";
import { useQuery } from "react-query";
import styled from "styled-components";
import { scriptBrowseMine } from "../api/script";
import NovelContent from "./NovelContent";
import jwt_decode from "jwt-decode";
import { Cookies } from "react-cookie";

const NovelContentsList = () => {

    const cookies = new Cookies();
    const cookieData : {exp : number, iat : number, userId : string} = jwt_decode(cookies.get('authorization').split(' ')[1]);

    const { isLoading, isError, data } = useQuery('browseMyNovels', () => scriptBrowseMine())

    if (isLoading) return <StLoadingDiv><StMotionLoading initial={{ scale : 0 }} animate={{ scale : 1 }} transition={{ duration : 0.5, repeat: Infinity }} /></StLoadingDiv>
    if (isError) return <StErrorDiv>An Error Has Been Occurred!</StErrorDiv>

    console.log(data);

    return (
        <StContentsListDiv>
            {data?.data.scripts.map((val : {UserId : number, plusCount : number, contributors : string, id : string, content : string, createdAt : string, genre : string, scriptId : number, title : string, updatedAt : string}) => <NovelContent key = {val.scriptId} data = {val} />)}
        </StContentsListDiv>
    );
};


export default NovelContentsList;

const StContentsListDiv = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
`

const StLoadingDiv = styled.div`
    margin-top : 1rem;
    width : 100%;
    height : 128px;
    display : flex;
    justify-content : center;
    align-items: center;
`

const StErrorDiv = styled.div`
    margin-top : 1rem;
    width : 100%;
    height : 128px;
    display : flex;
    justify-content : center;
    align-items: center;
    font-size : 2rem;
    font-family : 'inter';
    font-weight : 300;
    color : #757575;
`

const StMotionLoading = styled(motion.div)`
    width : 64px;
    height : 64px;
    border : 1px solid #757575;
    border-radius: 64px;
`
