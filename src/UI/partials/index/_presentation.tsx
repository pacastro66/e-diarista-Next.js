import { useEffect, useState } from "react";
import 
{ ButtonButton,
ContainerStyled,
   SectionButton,
   SectionContainer, 
   SectionPictureContainer, 
   SectionSubtitle, 
   SectionTitle 
} from "./_presentation.styled";

const Presentation =() =>{
   const [cleanerPicture,setCleanerPicture]=useState("");

   useEffect(()=>{
      const newClearPicture = 
      Math.random() < 0.5 
      ? "/img/home/housekeeper.png"
      : "/img/home/janitor.png";
      setCleanerPicture(newClearPicture);

   }, []);

    return <SectionContainer>
                <ContainerStyled>
                <SectionTitle>
                    Encontre agora mesmo um(a) <em>diarista</em>
                    <i className="twf-search"/>
                 </SectionTitle>

                 <SectionSubtitle>
                    São mais de 5.000 profissionais esperando por voçê
                 </SectionSubtitle>

                 <SectionButton href="/encontrar-diarista" mui={{variant:"contained"}}>
                    Encontrar um(a) diarista
                 </SectionButton>

                 <SectionPictureContainer>
                  <img src={cleanerPicture} alt=""/>
                 </SectionPictureContainer>                
                </ContainerStyled>
                <ButtonButton>
                  <i className="twf-caret-down"/>
                </ButtonButton>
          </SectionContainer>;
};
export default Presentation;