import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const colorOption = ['255, 179, 0', '0, 145, 255', '255, 0, 93', '77, 255, 0', '119, 0, 255'].sort(() => Math.random() - 0.5);
const viewBoxShapeOption = [
    ["0 0 171.34 153.41", "m95.34,2.09c-7.96-3.74-20.12-2.33-27.02,3.13L7.4,53.52c-6.9,5.47-9.43,16.43-5.64,24.37l29.2,61.08c3.8,7.94,14.1,14.44,22.9,14.44h74.85c8.8,0,17.84-6.96,20.09-15.47l21.96-83.01c2.25-8.51-2.42-18.53-10.39-22.27L95.34,2.09Z"],
    ["0 0 174.3 138.09", "m95.85,5.56c-4.75-7.41-12.52-7.41-17.27,0L2.17,124.62c-4.75,7.41-1.44,13.47,7.36,13.47h155.23c8.8,0,12.12-6.06,7.37-13.47L95.85,5.56Z"],
    ["0 0 188.52 132.43", "m60.67,6.49c-8.79.49-18.63,7.59-21.87,15.77L1.05,117.56c-3.24,8.18,1.31,14.87,10.11,14.87h129.08c8.8,0,17.87-6.95,20.16-15.45l27.6-102.4c2.29-8.5-3.03-15.05-11.81-14.55L60.67,6.49Z"],
    ["0 0 159.42 154.5", "m31.9,18.72c42.96-39.13,103.25-10.65,121.41,28.09,18.16,38.74-7.86,77.26-29.97,92.32-22.11,15.06-70.07,28.4-103.02-7.84C-12.62,95.04-3.18,50.68,31.9,18.72Z"],
    ["0 0 179.52 173", "m64.11,4.11c7.88-3.92,21.29-5.27,29.79-3.01l67.35,17.91c8.5,2.26,15.68,11.31,15.95,20.11l2.31,76.23c.27,8.8-5.92,19.28-13.75,23.29l-60.45,30.98c-7.83,4.01-20.89,4.54-29.02,1.17l-54.57-22.62c-8.13-3.37-15.33-13.31-16.01-22.08L.05,52.51c-.67-8.77,5.22-19.16,13.1-23.08L64.11,4.11Z"]
].sort(() => Math.random() - 0.5);
const randomMargin = ['4rem', '6rem', '8rem', '10rem', '12rem'].sort(() => Math.random() - 0.5);

const HomeShapeContents = ({idx, shape, info} : { idx : number, shape : number, info : {title : string, genre : string, content : string, scriptId : number, User : {id : string}}}) => {

    const [isMouseOn, setIsMouseOn] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <StShapeDiv idx = {idx} onClick = {() => {navigate(`/view-edit/${info.scriptId}`)}}>
        <StMotionSvg
            whileHover={{ scale: 1.2, rotate: 30 }}
            whileTap={{
                scale: 1,
                rotate: -30,
            }}
            xmlns = "http://www.w3.org/2000/svg"
            viewBox = {viewBoxShapeOption[shape][0]}
            className = "item"
            width = '150px'
            onMouseOver = {() => {setIsMouseOn(true)}}
            onMouseOut = {() => {setIsMouseOn(false)}}
            >
            <motion.path
                d = {viewBoxShapeOption[shape][1]}
                variants = {{
                    hidden: {
                        scale : 0,
                        fill: `rgba(${colorOption[shape]}, 1)`
                    },
                    visible: {
                        scale : 1,
                        fill: `rgba(${colorOption[shape]}, 1)`
                    }
                }}
                initial = "hidden"
                animate = "visible"
                transition = {{
                default : { duration: 0.5, ease: "easeInOut" },
                fill : { duration: 0.5, ease: [1, 0, 0.8, 1] }
                }}
            />
        </StMotionSvg>
        {isMouseOn ? <StTooltip>
            <StTooltipTitle>{info.title}</StTooltipTitle>
            <StTooltipGenre>{info.genre}</StTooltipGenre>
            <StTooltipContent>{info.content.slice(0, 20)}...</StTooltipContent>
        </StTooltip> : null}
        </StShapeDiv>
    );
};

export default HomeShapeContents;

const StShapeDiv = styled.div`
    position : relative;
    margin-top : ${(props : {idx : number}) => randomMargin[props.idx]};
`

const StMotionSvg = styled(motion.svg)`
    cursor : pointer;
    &:focus {
        outline : none;
        border : none;
    }
`

const StTooltip = styled.div`
    background-color : #303030;
    border-radius : 0.25rem;
    padding : 1rem;
    box-sizing : border-box;
    color : white;
    width : 200%;
    top : 100%;
    left : -50%;
    position : absolute;
    z-index : 1;
`

const StTooltipTitle = styled.div`
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 700;
    overflow : hidden;
    text-overflow : ellipsis;
    line-height : 2rem;
`

const StTooltipGenre = styled.div`
    margin-top : 0.5rem;
    font-family : 'inter'
    font-size : 1rem;
    font-weight : 700;
    overflow : wrap;
`

const StTooltipContent = styled.div`
    margin-top : 0.5rem;
    font-family : 'inter'
    font-size : 0.8rem;
    font-weight : 400;
    overflow : wrap;
`