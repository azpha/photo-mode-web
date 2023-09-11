import '../app/globals.css';
import Auth from '@/components/auth/Auth';

export default function Home() {
    return (
        <div className="p-10">
            <div className="h-10 mx-auto text-center">
                <h1 className="font-bold text-4xl">Alex&apos;s Photo Mode Shots</h1>
            </div>
            <Auth />
        </div>
    )
}