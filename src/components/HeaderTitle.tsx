import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const HeaderTitle = ({children} : {children : any}) => {

    const transition = {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.9],
    };
      
    const textReveal = {
        initial: {
          y: "0%",
          opacity : 0,
          scale : 0.8
        },
        animate: {
          y: "0%",
          opacity : 1,
          scale : 1
        },
    };

    return (
        <StHeaderDiv>
            <StHeaderTitle
                variants={textReveal}
                initial="initial"
                animate="animate"
                transition={transition}
            >
                {children}
            </StHeaderTitle>
        </StHeaderDiv>
    );
};

export default HeaderTitle;

const StHeaderDiv = styled.div`
    height : 194px;
    display : flex;
    align-items : center;
    flex-shrink : 0;
`

const StHeaderTitle = styled(motion.div)`
    font-family : 'inter';
    font-size : 4rem;
    font-weight : 900;
    letter-spacing : -0.1rem;
`