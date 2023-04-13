import styled from 'styled-components';

//* SearchForm
export const SearchForm = styled.form`
    position: relative;
    width: 100%;
    display: inline-block;
    margin-top: 2.1rem;
    margin-bottom: 3rem;

    svg {
        position: absolute;
        top: 50%;
        left: 1rem;
        translate: 0 -50%;
        width: 1.1rem;
        height: 1.1rem;
        opacity: 1;
        z-index: 2000;
    }

    input {
        width: 98.8%;
        display: block;
        margin: 0 auto;
        padding: 0.29rem 2.5rem;
        opacity: 1;
        outline: none;
        border: none;
        border-radius: 5rem;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(0.1rem);
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }

        &[type=search]::-ms-clear { display: none; width : 0; height: 0; }
        &[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
        &[type="search"]::-webkit-search-decoration,
        &[type="search"]::-webkit-search-cancel-button,
        &[type="search"]::-webkit-search-results-button,
        &[type="search"]::-webkit-search-results-decoration { display: none; }
    }
`;
//! SearchForm/End


//* Pinned
//? > Title
export const SectionPinnedTitle = styled.section`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 6.5%;

        .title {
            font-weight: 500;
            line-height: 1.08;
            letter-spacing: .5px;
            color: #000;
        }

        button {
            display: inline-flex;
            align-items: center;
            padding: 0.08rem 0.35rem;
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(0.1rem);
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            text-align: center;
            font-size: 0.85rem;
            font-weight: 400;
            border:none;
            outline: none;
            border-radius: 0.3rem;
            transition: all 150ms ease;
            
            &:hover {
                filter: brightness(1.05);
                box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
            }

            &:active {
                filter: brightness(0.96);
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            }

            svg {
                width: fit-content;
                height: 0.69rem;
                margin-inline-start: 0.5rem;
            }
        }
    }
`;

//? > Apps
export const SectionPinnedApps = styled.section`
    margin: 1rem 0;

    .pinnedApps {
        position: relative;
        width: 100%;
        height: 27vh;
        display: grid;
        grid-template-columns: repeat(6, minmax(2rem, 1fr));
        grid-template-rows: auto;
        column-gap: 1.8rem;
        row-gap: 1.8rem;
        justify-items: stretch;
        align-items: stretch;
        margin-inline: auto;
        padding: 1.5rem;
        overflow-y: scroll;
        overflow-x: hidden;

        scroll-snap-type: y mandatory;

        /* &::-webkit-scrollbar {
            width: 2px;
            background-color: #aaa;
        } */

        /* &::-webkit-scrollbar-thumb {
            background: #000;
        } */

        /* &::before {
            content: "";
            position: fixed;
            top: 29.5%;
            right: 0.5rem;
            transform: 0 -50%;
            width: 1rem;
            height: 4rem;
            background-color: red;
        } */

        .appItem {
            scroll-snap-align: center;

            position: relative;
            width: 100%;
            height: auto;

            &:hover::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
                width: 90px;
                height: 90px;
                border-radius: 0.33rem;

                background-color: rgba(255, 255, 255, 0.125);
                backdrop-filter: blur(1rem);
                filter: brightness(0.975);
                box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
                z-index: -1;

                &:active {
                    filter: brightness(0.90);
                    backdrop-filter: blur(1.4rem);
                }
            }

            &:active {
                scale: 0.98;

                img {
                    scale: 0.85;
                }
            }

            transform: all 250ms ease-in-out;

            img.icon {
                max-width: 100%;
                width: 2rem;
                height: 2.3rem;
                margin: auto;
                margin-block-end: 0.15rem;
                object-fit: contain;
            }
            
            .name {
                font-size: 0.8rem;
                text-align: center;
                overflow: hidden;
                white-space: pre;
                text-overflow: ellipsis;
            }
        }
    }
`;
//! Pinned/End


//* Recommended
export const Container = styled.section`
    header {
        margin: 0 6.5%;
        margin-block-start: 2rem;

        .title {
            font-weight: 500;
            line-height: 1.08;
            letter-spacing: .5px;
            color: #000;
        }
    }

    .recommendedItems {
        margin-top: 1.8rem;

        display: grid;
        grid-template-columns: repeat(2, minmax(50%, 1fr));
        grid-template-rows: auto;
        column-gap: 1rem;
        row-gap: 1.3rem;

        .rcmdItem {
            display: inline-flex;
            justify-content: start;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            padding: 0.65rem 0.7rem;
            border-radius: 0.33rem;
            transition: filter 150ms ease;

            &:hover {
                background-color: rgba(255, 255, 255, 0.150);
                backdrop-filter: blur(1.5rem);
                filter: brightness(0.93);
                box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
            }

            &:active {
                filter: brightness(0.90);
                backdrop-filter: blur(1.4rem);
            }

            img {
                max-width: 100%;
                width: 2rem;
                height: 2.3rem;
                margin-block-end: 0.15rem;
                object-fit: contain;
            }
        }

        @media screen and (max-width: 1200px) {
            margin-top: 1rem;
            padding: 0 2rem;
            column-gap: 0.3rem;
            row-gap: 0;

            .rcmdItem {
                gap: 0.5rem;
                padding: 0 0.7rem;
            }
        }

        @media screen and (min-width: 1200px) {
            margin-top: 1rem;
            padding: 0 2rem;
            column-gap: 0.3rem;
            row-gap: 0;

            .rcmdItem {
                gap: 1rem;
                padding: 0 0.7rem;
            }
        }

        @media screen and (max-height: 940px) {
            height: 15vh;
            overflow-y: scroll;
        }
    }
`;
//! Recommend/End


//* User
export const Wrapper = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.4);
    filter: brightness(0.9);
    backdrop-filter: blur(1rem);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;

    padding: 2vh 4.5rem;
    opacity: 1;
    z-index: 2000;
    border-radius:  0 0 0.35rem 0.35rem;

    .userProfile, .powerButton {
        padding: 0.2rem 0.8rem;
        border-radius: 0.30rem;

        &:hover {
            background-color: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(1.5rem);
            filter: brightness(1.1);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        }
    }
`;

//? > UserProfile
export const UserProfile = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: opacity 2s;

    &:hover::before {
        content: "${props => props.userName}";
        position: absolute;
        bottom: calc(58% + ${Math.random() + 'rem'});
        left: calc(50% + ${Math.random() + '%'});
        translate: -50% -58%;
        width: max-content;
        height: fit-content;
        padding: 0.3rem 0.6rem;
        font-size: 0.9rem;
        background-color: rgba(255, 255, 255, 1);
        backdrop-filter: blur(1.5rem);
        filter: brightness(1);
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        opacity: 1;
        z-index: 2000;
        border-radius: 0.30rem;
    }
    
    .userImage {
        width: 2.3rem;
        height: 2.3rem;
        object-fit: cover;
        border-radius: 50%;
    }

    .userName {
        font-size: 0.9rem;
        font-weight: 400;
        letter-spacing: 0.03rem;
    }
`;

//? > PowerButton
export const PowerButton = styled.div`
    padding: .8rem !important;

    &:active {
        mix-blend-mode: hard-light;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }

    img {
        width: 1.2rem;
        height: 1.2rem;
        object-fit: contain;
        filter: brightness(1); // drop-shadow()
        opacity: 1;
        z-index: 2000;
    }
`;
//! User/End