import {
  Container,
  HomeContainer,
  SubtitleText,
  TitleText,
} from "./styledComponents";

import Image from "next/image";

export default function Home() {
  return (
    <HomeContainer>
      <Container>
        <TitleText>Tus mascotas en las mejores manos.</TitleText>
        <SubtitleText>
          Somos una empresa con mas de 2,000 personas en el cuidado de tus
          mascotas.
        </SubtitleText>
      </Container>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 6rem)",
        }}
      >
        <Image
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
          }}
          src="/assets/landing.png"
          alt="me"
          objectFit="contain"
          objectPosition="right"
          fill
        />
      </div>
    </HomeContainer>
  );
}
