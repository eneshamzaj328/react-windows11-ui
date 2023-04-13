import styled from 'styled-components';

export const StartMenu = styled.section`
    position: absolute;
    left: 50%;
    bottom: calc(48px + 1.75vh);
    translate: -50% 0;
    pointer-events: ${(props) => props.showMenu ? 'all' : 'none'};
    opacity: ${(props) => props.showMenu ? 1 : 0};
    visibility: ${(props) => props.showMenu ? 'visible' : 'hidden'};
    translate: -50% ${(props) => props.showMenu ? '0%' : '100%'};
    z-index: -1;
    transition: all 250ms cubic-bezier(0.45, 0.03, 0.515, 0.95) 0s;
`;

export const Layout = styled.main`
    position: relative;
    width: max(38.15vw, 550px);
    height: 76.2vh;
    z-index: 2000;
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(0.7rem);
    box-shadow: 0.1rem 0.1rem 4rem;
    border-radius: 0.53rem;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    @media screen and (max-height: 940px) {
        height: 83vh;
    }
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;