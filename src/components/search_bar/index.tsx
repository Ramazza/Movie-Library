import { Container, IconContainer, StyledIcon, SearchBarComponent, ProfileContainer, ProfileImage } from "./styles";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faUserCircle } from "@fortawesome/free-regular-svg-icons";

function SearchBar(){

    // profile button
    // wacth list button
    // favorits button
    // search bar button

    return(
        <Container>
            <SearchBarComponent />
            <IconContainer>
                <StyledIcon icon={faBookmark} />
                <StyledIcon icon={faHeart} />
                <StyledIcon icon={faUserCircle} />
            </IconContainer>
            {/* <ProfileContainer>
                <ProfileImage />
            </ProfileContainer> */}
        </Container>
    );
}

export default SearchBar;