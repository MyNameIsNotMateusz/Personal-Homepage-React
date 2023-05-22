import mateuszOtorowskiProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper, Icon } from "./styled";
import faceIcon from "./faceIcon.png";
import laptopIcon from "./laptopIcon.png";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={mateuszOtorowskiProfile} alt="Mateusz Otorowski" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Mateusz Otorowski</Name>
            <Summary>
                <Icon src={faceIcon} alt="" />
                <Icon src={laptopIcon} alt="" />
                Jestem malutki!
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email} >
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);