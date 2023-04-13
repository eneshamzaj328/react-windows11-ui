import styled from 'styled-components';

//* Taskbar
export const Wrapper = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.25rem;
  padding-inline: 1.5rem;

  background-color: rgba(211, 233, 238, 0.5);
  backdrop-filter: blur(0.5rem);
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;


//* LeftSection
export const TaskbarLeftSection = styled.div`
    padding: 0.5rem 1.3rem;
    border-radius: 0.33rem;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
    }

    &:active {
      img {
        scale: 0.8;
        filter: brightness(1.5);
        mix-blend-mode: color-burn;
      }
    }

    img {
      max-width: 85%;
      margin-inline-end: auto;
      object-fit: contain;
      filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
      transition: all cubic-bezier(0, 0.03, 0.58, 1) 25ms;
    }
`;


export const MenuButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.05rem;
    padding: 0.55rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0.3rem;
    outline: none;
    opacity: 1;
    z-index: 2000;
    cursor: default;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
    }

    &:active {
      img {
        scale: 0.8;
        filter: brightness(1.5);
        mix-blend-mode: difference;
      }
    }


    img {
      position: relative;
      max-width: 100%;
      width: 1.5rem;
      height: 1.5rem;
      object-fit: contain;
      filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
      transition: all cubic-bezier(0, 0.03, 0.58, 1) 25ms;
    }
  }
`;
//! Taskbar / End


//* TaskbarPinnedAppsIcons
export const TaskbarPinnedAppsIcons = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.05rem;
    padding: 0.55rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0.3rem;
    outline: none;
    opacity: 1;
    z-index: 2000;
    cursor: default;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
    }

    &:active {
      img {
        scale: 0.8;
      }
    }

    img {
      position: relative;
      max-width: 100%;
      width: 1.75rem;
      height: 1.75rem;
      object-fit: contain;
      filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
      transition: all 25ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
    }

    &:nth-of-type(1) {
      position: relative;
      z-index: 1000;
      mix-blend-mode: color-burn;

      img {
        rotate: 0.003turn;
      }

      &::before {
        content: "";
        position: absolute;
        top: 46.9%;
        left: 46.1%;
        translate: -50% -50%;
        width: 40%;
        height: 40%;
        border-radius: 50%;
        z-index: -1;
        background-color: hsl(0, 0%, 20%, 0.43);
      }
    }
  }
`;
//! TaskbarPinnedAppsIcons / End


//* QuickSettingsIcons
export const QuickSettingsIcons = styled.div`
  display: flex;
  margin-left: auto;
  margin-inline-end: 3rem;

  button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin: 0 0.05rem;
    padding: 0.55rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0.3rem;
    outline: none;
    opacity: 1;
    z-index: 2000;
    cursor: default;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
    }

    img {
      position: relative;
      max-width: 100%;
      width: 1rem;
      height: 1rem;
      object-fit: contain;
      filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
      transition: all 500ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
    }

    &:nth-child(1) img,
    :nth-child(2) img {
      height: 0.8rem;
    }
  }
`;
//! QuickSettingsIcons / End


//* Clock
export const ClockSection = styled.article`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0.105rem 0.8rem;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.8rem;

  cursor: default;
  user-select: none;

  border-radius: 0.3rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(1rem);
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
  }

  &:hover::before {
    content: "${(props) => props.formattedDate}";
    position: absolute;
    top: 1rem;
    left: 50%;

    width: max-content;
    padding: 0.5rem;
    translate: calc(-50% * 1.3) calc(-50% * 3.8);

    font-size: 0.8rem;
    font-weight: 600;

    background-color: rgba(255, 255, 255, 0.863);
    backdrop-filter: blur(1rem);
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);

    border-radius: 0.3rem;

    filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
    transition: all 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 1s;
  }
`;
//! Clock / End