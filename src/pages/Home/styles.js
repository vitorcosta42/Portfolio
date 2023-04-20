import styled from "styled-components";

export const Container = styled.div`
  height: 30em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  padding-right: 4em;
  text-align: left;
`;

export const ButtonsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
`;

export const VitorContainer = styled.div``;

export const LinkedinContainer = styled.div`
margin-right: 0.5em;
padding: 0;
margin-bottom: 0;
 background-color: #5e3e61;
  fill: #5e3e61;
&:hover {
  fill: #333159;
}
`;

export const GithubContainer = styled.div`
  margin-right: 0.5em;
  padding: 0;
  margin-bottom: 0;
  background-color: #5e3e61;
  fill: #5e3e61;
`;
// background-color: rgba(0, 0, 0, 0.2);
export const Button = styled.button`
  padding: 15px;
  border-radius: 0.5em;
  margin-right: 1em;
  background-color: #5e3e61;
  border: 3px solid #333159;
  font-size: 1.4em;
  padding-bottom: 8px;
  padding-top: 8px;
  align-items: center;
  display: flex;
  &:hover {
    background-color: #333159;
    color: #fff;
    cursor: pointer;
    ${LinkedinContainer} {
       background-color: #333159;;
       fill:#333159;
    }
    ${GithubContainer} {
      background-color: #333159;
      fill:#333159;
    }
  }
`;

export const Span = styled.span`
  font-size: 2em;
  text-align: left;
`;

export const Name = styled.h1`
  font-size: 4em;
  text-align: left;
  margin: 0;
`;

export const Dev = styled.span`
  font-size: 1.8em;
  text-align: left;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 5px;
`;

export const VitorIcon = styled.img`
  border: 5px solid #333159;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);

  animation: floatAnimation 2s ease-in-out infinite;

  @keyframes floatAnimation {
    0% {
      transform: translateY(-5px);
    }

    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;
