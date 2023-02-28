import styled from 'styled-components';
import { GrRotateRight } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            <StMain> 
             <ResetIcon />

             <Link to="/register" style={{ textDecoration: "none" }}>
                <RBtn>Register</RBtn>
             </Link>

             <Link to="/login" style={{ textDecoration: "none" }}>
                <LBtn>Log in</LBtn>
             </Link>

             {/* <div>
                <ListBox></ListBox>
             </div> */}
            </StMain>
    )
}

export default Home;



const StMain = styled.div `
    position:relative;
    width:100%; height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ResetIcon = styled(GrRotateRight)`
    position:absolute;
    top:-105px; left:300px;
    font-size:4rem;
    color: var(--font-white);
    cursor:pointer;
`

// const ListBox = styled.div `
//     position:absolute;
//     top:300px; left:200px;
//     width:300px; height:250px;
//     background:white;
//     cursor:pointer;
// `

const RBtn = styled.button `
    position:absolute;
    top:-95px; right:320px;
    margin-right:20px;
    width:200px; height:60px;
    background:white;
    font-size:1.4rem;
    letter-spacing:-0.5px;
    background: var(--font-white);
    color:var(--btncolor);
    text-align:center;
    line-height:60px;
    border-radius:10px;
    font-family: 'SBAggroB';
    border:none;
    cursor:pointer;

    // &:hover{  
    //     border: 3px solid white;
    //     background:none;
    //     transition:.2s;
    //     color:white;
`


const LBtn = styled.button `
    position:absolute;
    top:-95px; right:120px;
    width:200px; height:60px;
    background: var(--font-white);
    font-size:1.4rem;
    letter-spacing:-0.5px;
    color:var(--btncolor);
    text-align:center;
    line-height:60px;
    border-radius:10px;
    font-family: 'SBAggroB';
    border:none;
    cursor:pointer;

    // &:hover{  
    //     border: 3px solid white;
    //     background:none;
    //     transition:.2s;
    //     color:white;
`
