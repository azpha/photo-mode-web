import RootLayout from '@/app/layout'
import PhotoList from '@/components/PhotoList'

export default function Home() {
  return (
    <RootLayout>
      <div className="text-center mx-auto">
        <PhotoList />
      </div>
    </RootLayout>
  )
}
