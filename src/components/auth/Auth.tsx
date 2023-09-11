import { useSession, signIn, signOut} from 'next-auth/react';
export default function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <div className="text-center">
                <p className="font-bold">Signed in as {session.user?.name}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div className="text-center">
                <button onClick={() => signIn()}>Sign In</button>
            </div>
        )
    }
}