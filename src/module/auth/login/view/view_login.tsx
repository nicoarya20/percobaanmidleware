import { WARNA } from '@/module/_global';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Box, Button, Stack, Text, TextInput } from '@mantine/core';


function ViewLogin() {

  return (
    <Box>
      <LayoutLogin>
        <Stack>
          <Box pt={20}>
            <TextInput 
              styles={{
                input: {
                  color: "black",
                  backgroundColor: "white",
                  borderColor: WARNA.bgTombol,
                }
              }}
              radius={30}
              leftSection={<Text c={"black"} fz={'sm'}>+62</Text>}
              placeholder='xxxx xxxx xxxx'
              label={<Text c={WARNA.bgTombol} fz={"xs"}>Masukkan Nomor Telepon</Text>}
              
            />
            <Text pt={5} c={WARNA.bgTombol} fz={"10"}>Kami akan mengirimkan kode verifikasi melalui WhatsApp</Text>
          </Box>
          <Box pt={10}>
            <Button  fullWidth c={WARNA.bgApk} bg={WARNA.bgTombol} radius={"xl"}>MASUK</Button>
          </Box>
        </Stack>
      </LayoutLogin>
    </Box>
  );
}

export default ViewLogin;
