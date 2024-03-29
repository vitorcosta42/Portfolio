import React, { useEffect, useState } from "react";
import * as S from "./styles";
import {
  BootstrapIcon,
  CssIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  LaravelIcon,
  PhpIcon,
  ReactIcon,
  SkillsGithubIcon,
  SqlIcon,
  StyledIcon,
  TypeScriptIcon,
  VueIcon,
  NextIcon,
  TailwindIcon,
  JestIcon,
} from "../../components/icons";
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const defaultDescMobile = "Toque em alguma habilidade para ler a descrição!";
  const defaultDescDesktop =
    "Passe o mouse por cima de alguma habilidade para ler a descrição!";

  const [skillTitle, setSkillTitle] = useState("");
  const [skillDescription, setSkillDescription] = useState(defaultDescDesktop);
  const [activeIcon, setActiveIcon] = useState(null);

  const handleSkillHover = (title, description, icon) => {
    setSkillTitle(title);
    setSkillDescription(description);
    setActiveIcon(icon);
    setIsHovered(true);
  };

  const scrollToSkillsSection = () => {
    const skillsSection = document.getElementById("habilidades");
    if (skillsSection) {
      window.scrollTo({
        top: skillsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      const triggerHeight = documentHeight * 0.5;

      if (scrollPosition > triggerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateDescription = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSkillDescription(defaultDescMobile);
      } else {
        setSkillDescription(defaultDescDesktop);
      }
    };

    updateDescription();
    window.addEventListener("load", updateDescription);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", updateDescription);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <S.Container>
      <S.SkillsContainer id="habilidades" visible={isVisible}>
        <S.TitleContainer>
          <S.Title>Habilidades</S.Title>
        </S.TitleContainer>
        <S.Containers>
          <S.SkillDescription>
            <S.TitleDescription>{skillTitle}</S.TitleDescription>
            <S.Description>{skillDescription}</S.Description>
          </S.SkillDescription>
          <S.Skills>
            <S.ContainerSkills>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "HTML",
                      "HTML é a linguagem de marcação padrão para a criação de páginas web, utilizada para estruturar e exibir o conteúdo de um site.",
                      "html"
                    );
                  }}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                  isHovered={activeIcon === "html" ? isHovered : false}
                >
                  <HtmlIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "html" ? "#f46336	" : "#333159"}
                  />
                </S.Skill>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "CSS",
                      "CSS é uma linguagem de estilo utilizada para definir a aparência e o layout de elementos em uma página web.",
                      "css"
                    );
                  }}
                  isHovered={activeIcon === "css" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <CssIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "css" ? "#3047ca" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "JavaScript",
                      "JavaScript é uma linguagem de programação amplamente utilizada no desenvolvimento web, que permite a criação de interatividade e funcionalidades dinâmicas em páginas web.",
                      "javascript"
                    );
                  }}
                  isHovered={activeIcon === "javascript" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <JavaScriptIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "javascript" ? "#F0DB4F" : "#333159"}
                  />
                </S.Skill>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "TypeScript",
                      "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional e recursos avançados ao JavaScript, tornando-o mais robusto e escalável para projetos de grande porte.",
                      "typescript"
                    );
                  }}
                  isHovered={activeIcon === "typescript" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <TypeScriptIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "typescript" ? "#007acc" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
            </S.ContainerSkills>

            <S.ContainerSkills>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "React",
                      "React é uma biblioteca JavaScript de código aberto para a criação de interfaces de usuário, que permite o desenvolvimento de aplicações web reativas e de uma única página (SPA).",
                      "react"
                    );
                  }}
                  isHovered={activeIcon === "react" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <ReactIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "react" ? "#64DBFB" : "#333159"}
                  />
                </S.Skill>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Next.js",
                      "O Next.js é um framework JavaScript de código aberto que permite criar aplicativos da Web e sites estáticos de alta performance. ",
                      "next"
                    );
                  }}
                  isHovered={activeIcon === "next" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <NextIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "next" ? "black" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Jest",
                      "Jest é um framework de teste em JavaScript criado pelo Facebook. Ele permite que você escreva testes com uma API fácil de usar e que funciona com vários projetos.",
                      "jest"
                    );
                  }}
                  isHovered={activeIcon === "jest" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <JestIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "jest" ? "#C63D14" : "#333159"}
                  />
                </S.Skill>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Styled Components",
                      "Styled Components é uma biblioteca para React que permite escrever estilos CSS diretamente no código JavaScript, tornando o desenvolvimento de componentes estilizados mais intuitivo e modular.",
                      "styled"
                    );
                  }}
                  isHovered={activeIcon === "styled" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <StyledIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "styled" ? "#FC8EAC" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
            </S.ContainerSkills>

            <S.ContainerSkills>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "PHP",
                      "PHP é uma linguagem de programação do lado do servidor amplamente utilizada, especialmente adequada para o desenvolvimento web, que permite a criação de páginas dinâmicas e interativas.",
                      "php"
                    );
                  }}
                  isHovered={activeIcon === "php" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <PhpIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "php" ? "#787CB5" : "#333159"}
                  />
                </S.Skill>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Laravel",
                      "Laravel é um ambiente de execução JavaScript no lado do servidor, que permite construir aplicações web escaláveis e de alta performance.",
                      "laravel"
                    );
                  }}
                  isHovered={activeIcon === "laravel" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <LaravelIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "laravel" ? "#ff2d20" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Git",
                      "Git é um sistema de controle de versão amplamente utilizado que permite rastrear e gerenciar alterações em um projeto de desenvolvimento de software.",
                      "git"
                    );
                  }}
                  isHovered={activeIcon === "git" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <GitIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "git" ? "#F1502F" : "#333159"}
                  />
                </S.Skill>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Github",
                      "GitHub é uma plataforma de hospedagem de código-fonte baseada em Git, amplamente utilizada para colaboração e versionamento de projetos de software.",
                      "github"
                    );
                  }}
                  isHovered={activeIcon === "github" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <SkillsGithubIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "github" ? "black" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
            </S.ContainerSkills>
            {/* container das novas skills */}
            <S.ContainerSkills>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Vue.js",
                      "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
                      "vue"
                    );
                  }}
                  isHovered={activeIcon === "vue" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <VueIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "vue" ? "#41b883" : "#333159"}
                    secondFill={activeIcon === "vue" ? "#34495e" : "#333159"}
                  />
                </S.Skill>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Bootstrap",
                      "Bootstrap é um framework de código aberto para desenvolvimento web que facilita a criação de interfaces responsivas e estilizadas.",
                      "bootstrap"
                    );
                  }}
                  isHovered={activeIcon === "bootstrap" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <BootstrapIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "bootstrap" ? "#563d7c" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
              <S.ResponsiveContainer>
                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "Tailwind CSS",
                      "Assim como o Boostrap, Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta.",
                      "tailwind"
                    );
                  }}
                  isHovered={activeIcon === "tailwind" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <TailwindIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "tailwind" ? "#3490dc" : "#333159"}
                  />
                </S.Skill>

                <S.Skill
                  onClick={() => {
                    scrollToSkillsSection();
                  }}
                  onMouseEnter={() => {
                    handleSkillHover(
                      "SQL",
                      "SQL (Structured Query Language) é uma linguagem de consulta utilizada para interagir com bancos de dados relacionais, permitindo a manipulação e recuperação de dados.",
                      "sql"
                    );
                  }}
                  isHovered={activeIcon === "sql" ? isHovered : false}
                  onMouseLeave={() => {
                    setActiveIcon(null);
                  }}
                >
                  <SqlIcon
                    width="75"
                    height="75"
                    fill={activeIcon === "sql" ? "#00758F" : "#333159"}
                  />
                </S.Skill>
              </S.ResponsiveContainer>
            </S.ContainerSkills>
          </S.Skills>
        </S.Containers>
      </S.SkillsContainer>
    </S.Container>
  );
};

export default Skills;
