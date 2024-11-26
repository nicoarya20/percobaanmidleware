/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { ViewVerifikasi } from "@/module/auth";
import { Button } from "@mantine/core";
import { useState } from "react";
import { WibuSubscription } from "wibu-pkg/dist/wibu-push/WibuPushHandlerProvider";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  async function kirim() {
    setLoading(true)
    try {
      const res = await fetch("/api/push", {
        method: "POST",
        body: JSON.stringify({ subscription: WibuSubscription.getSubscription() })
      })

      const dataText = await res.text()
      if (!res.ok) {
        return console.log(res.statusText)
      }

      console.log(dataText)
    } catch (err: any) {
      console.log(err + "")
    } finally {
      setLoading(false)
    }

  }
  return (
    <>
      <ViewVerifikasi />
      <Button loading={loading} onClick={kirim}>kirim</Button>
    </>
  );
}
