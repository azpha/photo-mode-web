import Image from 'next/image';

type PhotoItemProps = {
    src: string,
    subtitle: string,
    game: string,
    createdAt: string
}
export default function PhotoItem(props: PhotoItemProps) {
    return (
        <main className="inline-block">
            <div className="container bg-gray-800 flex flex-col justify-center items-center">
                <Image alt={props.subtitle} width="400" height="400" className="px-5 pt-5" src={props.src} />
                <div className="photo-caption p-3">
                    <h1>{props.subtitle}</h1>
                    <p>{props.game} - {new Date(props.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        </main>
    )
}