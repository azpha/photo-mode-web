import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useEffect} from 'react'; 

export default function AuthGate() {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status != "authenticated" && status !== "loading") {
            console.log("[PhotoAuth] No valid session, redirecting..")
            router.replace("/")
        } else console.log("[PhotoAuth] Valid session!")
    }, [status, router]) 

    if (!session) {
        return <></>
    }
}