import { styled} from "@mui/material/styles";


export const FooterContainer = styled("footer")`
    background-color: ${({theme})=> theme.palette.primary.main} ;
    color: ${({theme})=>theme.palette.primary.contrastText};
    padding: ${({theme})=>theme.spacing(4,0)};

`;