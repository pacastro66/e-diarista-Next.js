import { Container, Toolbar } from "@mui/material";
import Link from "UI/components/navigation/Link/Link";
import { HeaderAppBar,HeaderLogo,ButtonContainer} from "./Header.styled";
import RoundedButton from "UI/components/inputs/RoundedButton/RoundedButton";


const Header:React.FC = ()=> {
    return <HeaderDesktop/>;
}

export default Header;


const HeaderDesktop:React.FC = () => {
   
    return <HeaderAppBar>
        <Toolbar component={Container}>
            <Link href="/">            
            <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista"></HeaderLogo>            
            </Link>
            <div>&nbsp;</div>    
            <div>&nbsp;</div>    

            <ButtonContainer>

            <Link Component={RoundedButton} mui={{variant:"contained",color:"primary"}} href="/cadastro/diarista">Seja um(a) diarista</Link>
            <Link href="/login">Login</Link>

            </ButtonContainer>
        </Toolbar>

    </HeaderAppBar>;
};