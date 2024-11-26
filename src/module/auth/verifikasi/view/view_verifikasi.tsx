import { WARNA } from '@/module/_global';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Box, PinInput, Stack, Text } from '@mantine/core';
import React from 'react';

function ViewVerifikasi() {
    return (
        <Box>
            <LayoutLogin>
                <Box pt={20}>
                    <Text fw={"bold"} c={WARNA.bgTombol} fz={"md"}>Verifikasi Nomor Telepon</Text>
                    <Text >Masukkan kode yang kami kirimkan melalui WhatsApp</Text>
                    <Text>+6289647037426</Text>
                    <PinInput size='lg' type='number' />

                </Box>
            </LayoutLogin>
        </Box>
    );
}

export default ViewVerifikasi;
