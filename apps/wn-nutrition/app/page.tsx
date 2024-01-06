import { ReactElement } from "react";
import { Container, Text, Title } from "@mantine/core";

export default function Page(): ReactElement {
  return (
    <Container size="xl">
      <Title order={1} ta="center">
        Wellnub Nutrition
      </Title>
      <Text ta="center">This is the default page for Wellnub Nutrition</Text>
    </Container>
  );
}
