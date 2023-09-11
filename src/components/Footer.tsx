import '@/app/globals.css';

export default function Footer() {
    return (
        <div className="pt-5">
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-5 text-center">
                <p>Built by <a className="hover:underline hover:text-gray-400" href="https://alexavfrantz.com" target="_blank">Alex</a></p>
                <p><a className="hover:underline hover:text-gray-400" href="mailto:alex@alexavfrantz.com">alex@alexavfrantz.com</a></p>
            </div>
        </div>
    )
}