import { WibuServerPush } from 'wibu-pkg'

const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
const privateKey = process.env.VAPID_PRIVATE_KEY!

WibuServerPush.init({
    NEXT_PUBLIC_VAPID_PUBLIC_KEY: publicKey,
    VAPID_PRIVATE_KEY: privateKey,
})

export async function POST(req: Request) {
    const { subscription } = await req.json();
    const push = await WibuServerPush.sendOne({
        subscription: subscription,
        data: {
            variant: "notification",
            body: "pa kabar",
            link: "",
            title: "ini kiriman"
        }
    })

    return new Response(JSON.stringify(push), { status: 200 })
}