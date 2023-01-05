import { Container, Divider, IconButton, MenuItem, MenuList, Toolbar } from "@mui/material";
import Link from "UI/components/navigation/Link/Link";
import { HeaderAppBar,HeaderLogo,ButtonContainer,HeaderDrawer} from "./Header.styled";
import RoundedButton from "UI/components/inputs/RoundedButton/RoundedButton";
import React from "react";


const Header:React.FC = ()=> {
    return <HeaderMobile/>;
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

const HeaderMobile: React.FC = () => {
    return ( 
    <HeaderAppBar>
           <Toolbar component={Container}>
                <IconButton edge={"start"} color={"inherit"}>
                  <i className="twf-bars"/>  
                </IconButton>
                <Link href="/">            
                    <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista"/>            
                </Link>
                <HeaderDrawer open={false}>
                    <MenuList>
                        <Link href="/login" Component={MenuItem}>
                          Login
                        </Link>
                        <Divider/>
                        <Link href="/cadastro/diarista" Component={MenuItem}>
                          Seja um(a) diariasta
                        </Link>
                    </MenuList>
                </HeaderDrawer>
            </Toolbar>
    </HeaderAppBar>
    );

};