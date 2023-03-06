import { AccordionSummary,AccordionDetails, Container, Typography } from "@mui/material";
import { useState } from "react";
import { 
        Wave,
        SectionContainer,
        SectionTitle,
        SectionSubTitle, 
        AccondionStyled 
    } from "./_frequent-question.styled";


const questionList=[
  {
    question:"Dúvida 1",
    answer:
    "Lorem ipsum dolor sit amet consectutur adipisicing elit.Voluptante, Voluptates saepe et, maiores cupiditaterat",
  },

  {
    question:"Dúvida 2",
    answer:
    "Lorem ipsum dolor sit amet consectutur adipisicing elit.Voluptante, Voluptates saepe et, maiores cupiditaterat",
  },

  {
    question:"Dúvida 3",
    answer:
    "Lorem ipsum dolor sit amet consectutur adipisicing elit.Voluptante, Voluptates saepe et, maiores cupiditaterat",
  },

  {
    question:"Dúvida 4",
    answer:
    "Lorem ipsum dolor sit amet consectutur adipisicing elit.Voluptante, Voluptates saepe et, maiores cupiditaterat",
  },




];

const FrequestQuestion =()=>{
  const [activeAcoordion,setActiveAccordion] = useState(0);

  function isOpen(accordionIndex :number):boolean {
    return activeAcoordion === accordionIndex;
  }

  function changeOpenAccordion(accordionIndex:number):void {

    if(isOpen(accordionIndex)){
       setActiveAccordion(0); 
    }else{
        setActiveAccordion(accordionIndex)
    }
  }

    function getIcon(accordionIndex:number):string {
        return isOpen(accordionIndex) ? "twf-minus" :"twf-plus";
    }

    return(
        <div>
            <SectionContainer>
               <Wave src={"/img/home/waves.svg"}/>
                <Container>
                    <SectionTitle>Ainda está com dúvida</SectionTitle>
                    <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>

                    {questionList.map((item,index)=> (

                        <AccondionStyled key={index} expanded={isOpen(index +1)}
                        onChange={()=> changeOpenAccordion(index + 1)}
                        >
                         <AccordionSummary  expandIcon={<i className={getIcon(index+1)} />}>
                              <Typography color={"primary"}>{item.question}</Typography>
    
                         </AccordionSummary>
    
                            <AccordionDetails>
                                <Typography>{item.answer}</Typography>
                            </AccordionDetails>
                        </AccondionStyled>
                        ))}
                </Container>
            </SectionContainer>

            


        </div>);
};

export default FrequestQuestion;

