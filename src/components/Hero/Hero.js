import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br />
        Mi Portafolio Personal
      </SectionTitle>
      <SectionText>
        Aquí podrás encontrar información sobre mí, cómo empecé en el mundo de
        la programación, algunos de los proyectos que he realizado y todas las
        cosas que he ido aprendiendo a lo largo de mi camino. <br />
        Soy un apasionado del desarrollo web que está en constante aprendizaje para seguir creciendo como desarrollador.
      </SectionText>
      <Button>
        <a href="https://drive.google.com/file/d/1942HGhWjkE1LaUDj1pg7f82G7FWDGbfa/view" target="_blank">Descargar CV</a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
