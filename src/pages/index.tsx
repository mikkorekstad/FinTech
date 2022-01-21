import { Text } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import Image from "next/image";

const Index = ({ recommendation }) => (
  <Container height="100vh">
    <Hero />
    <Image
      src="https://stockcharts.com/c-sc/sc?s=%24VIX&p=D&b=5&g=0&i=0&r=1642776343225"
      height={1400}
      width={1060}
    />

    <div style={{ fontSize: "69px" }}>
      <p>Todays recommendation is to {recommendation} </p>
    </div>

    <DarkModeSwitch />
    <Footer>
      <Text>Created by Mikko and Jon Mikkel</Text>
    </Footer>
  </Container>
);

export default Index;

export async function getServerSideProps(context) {
  const api_url = "https://fintech-tin100-api.herokuapp.com";
  const recommendation = await fetch(`${api_url}/recommendation`).then((res) =>
    res.json()
  );
  var output_text = "";
  if (recommendation.buy === "True") {
    var output_text = "Buy 🚀";
  } else if (recommendation.sell === "True") {
    var output_text = "Sell 🔥";
  } else {
    var output_text = "Hold 🙌💎";
  }

  return {
    props: {
      recommendation: output_text,
    },
  };
}
