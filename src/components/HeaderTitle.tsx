import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useWhiteMode } from './context/WhiteModeContext';


const HeaderTitle = () => {
    const { whiteMode, toggleWhiteMode } = useWhiteMode();
    const navigate = useNavigate();

    return (
        <StHeaderDiv>
            <WhiteBox onClick={toggleWhiteMode}>
                {!whiteMode && <HiSun />}
                {whiteMode && <HiMoon />}
            </WhiteBox>
         
            <Link to="/">
               <StHeaderTitle onClick = {() => {navigate('/')}}>WAVESCRIPT</StHeaderTitle>
            </Link>
        </StHeaderDiv>
    );
};

export default HeaderTitle;

const StHeaderDiv = styled.div`
    position:relative;
    top:100px;
    width:100%; height:200px;
    display: flex;
    align-items: center;
`

const WhiteBox = styled.button `
    position:absolute;
    top:5px; left: 150px;
    font-size:3rem;
    cursor:pointer;
    background:none;
    border:none;
    color: var(--sun-color);
`

const StHeaderTitle = styled.h1`
    position:absolute;
    top:-27%; left:50%;
    transform:translate(-50%, 0); 
    margin-bottom:70px;
    font-size:4.5rem;
    font-weight:bold;
    font-family: 'SBAggroB';
    cursor:pointer;
    color: var(--font-white);
`

