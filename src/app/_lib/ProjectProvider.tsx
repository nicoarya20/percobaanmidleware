'use client'
import React from 'react';
import { WibuPushHandlerProvider } from 'wibu-pkg';

const NEXT_PUBLIC_VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!;
function ProjectProvider() {
  return (
    <WibuPushHandlerProvider NEXT_PUBLIC_VAPID_PUBLIC_KEY={NEXT_PUBLIC_VAPID_PUBLIC_KEY} log onMessage={(message) => {
      console.log("SAYA MENDAPATKANPESAN", message);
    }} />
  )
}

export default ProjectProvider;
