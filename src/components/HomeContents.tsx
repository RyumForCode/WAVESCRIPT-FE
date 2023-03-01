import styled from "styled-components";
import { motion } from "framer-motion";
import HomeShapeContents from "./HomeShapeContents";
import { useQuery } from "react-query";
import { scriptBrowseRandom } from "../api/script";

const Home = () => {

    const {isLoading, isError, data} = useQuery('browseRandom', () => scriptBrowseRandom());

    if(isLoading) return <StLoadingDiv><StMotionLoading initial={{ scale : 0 }} animate={{ scale : 1 }} transition={{ duration : 0.5, repeat: Infinity }} /></StLoadingDiv>
    if(isError) return <StErrorDiv>An Error Has Been Occurred!</StErrorDiv>

    return (
        <StMainContainer>
            {data?.data.randomScripts.map((val : {title : string, genre : string, content : string}, idx : number) => <HomeShapeContents key = {idx} idx = {idx} shape = {idx} info = {val}/>)}
        </StMainContainer>
    )
}

export default Home;

const StMainContainer = styled(motion.div)`
    width : 80%;
    height : 100%;
    display : flex;
    justify-content : space-between;
    align-items : flex-start;
    flex-grow : 1;

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

const StLoadingDiv = styled.div`
    margin-top : 1rem;
    width : 100%;
    height : 256px;
    display : flex;
    justify-content : center;
    align-items: center;
`

const StErrorDiv = styled.div`
    margin-top : 1rem;
    width : 100%;
    height : 256px;
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
