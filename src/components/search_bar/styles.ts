import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    background-color: aqua;
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;
`;

export const SearchBarComponent = styled.input`
    width: 40vw;
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    width: 2rem;
    height: 2rem;
    color: gray;

    &:hover {
        color: white;
    }
`;

export const ProfileContainer = styled.div`
    
`;

export const ProfileImage = styled.img`
    
`;