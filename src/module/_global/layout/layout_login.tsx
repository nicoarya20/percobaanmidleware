import { Box, Container, Image, Stack, Title } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutLogin({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container size={"xs"}>
        <Box bg={WARNA.bgApk}>
          <Stack gap={3} align={"center"} justify='center' h={"100vh"}>
            <Image src={"/assets/image/logo.png"} alt='' w={100} h={100} />
            <Title order={5} c={WARNA.bgTombol}>Everything You Need In One Place</Title>
            {children}
          </Stack>
        </Box>
      </Container>
    </Box >
  );
}

export default LayoutLogin;
