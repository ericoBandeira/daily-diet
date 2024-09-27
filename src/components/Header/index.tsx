import { Container, LogoContainer, PhotoContainer } from "./styles";

import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <LogoContainer source={logoImg} />
      <PhotoContainer
        source={{ uri: "https://github.com/ericoBandeira.png" }}
      />
    </Container>
  );
}
