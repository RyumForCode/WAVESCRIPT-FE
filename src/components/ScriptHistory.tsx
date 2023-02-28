import styled from "styled-components";

const ScriptHistory = ({ id, content } : { id : string, content : string }) => {
    return (
        <StHistory>
            <StHistoryAuthor>{id}</StHistoryAuthor>
            <StHistoryText>{content}</StHistoryText>
        </StHistory>
    );
};

export default ScriptHistory;

const StHistory = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : nowrap;
    justify-content : space-between;
    align-items : flex-start;
    word-break : keep-all;
    gap : 1.5rem;
    margin-top : 1rem;
    position : relative;
`

const StHistoryAuthor = styled.div`
    font-weight : 700;
    font-family : 'inter';
    position : absolute;
    left : -6rem;
    line-height : 2rem;
`
const StHistoryText = styled.div`
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    line-height : 2rem;
`