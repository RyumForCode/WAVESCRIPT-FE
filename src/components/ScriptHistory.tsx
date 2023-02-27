import styled from "styled-components";

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl eu felis sagittis condimentum vel quis odio. Vestibulum sed erat a mi pellentesque commodo vel a lacus. Etiam mollis consectetur turpis eget pulvinar. Donec id commodo lorem, vitae ultricies velit. In hac habitasse platea dictumst. Donec dictum mi lectus, ornare luctus nisi commodo eleifend. Ut non interdum enim, et eleifend leo. Praesent accumsan risus egestas, malesuada mauris mollis, accumsan mi. Proin lacus quam, facilisis vel mi id, faucibus lacinia ex. Quisque eget ultrices nibh, eget egestas tellus. Donec luctus tempus tristique. Aliquam volutpat sapien ut sapien ornare dapibus. Vivamus feugiat nunc rutrum, pharetra erat eget, pretium orci. Quisque id elit ac massa sodales vulputate at eu tortor. Sed tristique tellus magna, vestibulum facilisis enim rutrum ut. Vivamus quis mi sagittis, vehicula ipsum sed, luctus lorem. Sed hendrerit eros non ipsum lobortis pellentesque. Fusce lacinia finibus lectus, non vehicula orci molestie vitae. Aliquam volutpat orci urna, vel fringilla arcu sollicitudin commodo.';
const author = 'contributorId';


const ScriptHistory = ({ id } : { id : string }) => {
    return (
        <StHistory>
            <StHistoryAuthor>{id}</StHistoryAuthor>
            <StHistoryText>{text}</StHistoryText>
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