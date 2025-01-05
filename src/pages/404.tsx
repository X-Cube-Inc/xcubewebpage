import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

export default function Error404 () {
  return (
    <div className='text-white bg-gradient-to-tl from-korail-blue to-korail-lightBlue w-full min-h-screen'>
      <Navbar />
      <Container className='min-h-screen'>
        <div className='flex justify-center min-h-screen'>
          <div className='self-center font-bold text-9xl text-center'>
            <p>404</p>
            <p className='font-bold text-xl'>해당 페이지를 찾을 수 없습니다</p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
