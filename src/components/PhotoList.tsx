import PhotoItem from './PhotoItem';
import axios from 'axios';
import {useState, useEffect} from 'react';

type PhotoObject = {
    id: number,
    updatedAt: string,
    createdAt: string,
    game: string,
    subtitle: string,
    photoUrl: string
}
export default function PhotoList() {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        if (!photos) {
            axios("/api/photo")
                .then(async (res) => {
                    if (res.status == 200) {
                        let json: any = await res.data.data
                        setPhotos(json.map((v: PhotoObject, k: number) => {
                            return <PhotoItem 
                                        src={v.photoUrl}
                                        key={k} 
                                        subtitle={v.subtitle} 
                                        game={v.game} 
                                        createdAt={v.createdAt} 
                                    />
                        }))
                    }
                })
        }
    })

    if (photos) {
        return (
            <main className="container inline-block text-center pb-20">
                {photos}
            </main>
        )
    }
}