import ImageList from '@/components/ImageList'
import Navbar from '@/components/Navbar';
import Pagination from '@/components/Pagination';
import Filter from '@/components/FilterComponent/Filter';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const img = [
    {
        images : "./images/download (1).jpeg"
    },
    {
        images : "./images/download (2).jpeg"
    },
    {
        images : "./images/download (3).jpeg"
    },
    {
        images : "./images/download (4).jpeg"
    }

]
  return (
    <>
    <Navbar />
    <Filter />
    <ImageList />
    <Pagination />
    </>
  )
}
