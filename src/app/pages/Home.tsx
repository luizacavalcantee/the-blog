import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import Arrow from '../../assets/arrow-right.svg';
import Foto from '../../assets/featured-image.png';
import Search from '../../assets/search.svg';

export default function Home() {
  return (
    <div>
      <div id='home' className="bg-darkPurple py-12 w-full">
        <div className="container mx-auto px-10 lg:container mx-auto px-20">
          <header className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100} 
              className='mr-28'
            />
            <div className="hidden lg:flex ml-auto gap-4 text-white mx-auto">
              <div className="mx-auto flex items-center justify-center"> 
                <span className="border-l-2 border-green h-6 mx-[3px]"/>
                <a href="#home">
                  <h3>Home</h3>
                </a>
              </div>
              <div className='flex items-center justify-center'>
                <a href="#sobre">
                  <h3>Sobre</h3>
                </a>
              </div>
              <div className='flex items-center justify-center'>
                <a href="#publicações">
                  <h3>Publicações</h3>
                </a>
              </div>
              <div className='flex items-center justify-center'>
                <a href="#contato">
                  <h3>Contato</h3>
                </a>
              </div>
            </div>
  
            <div className='hidden lg:flex'>
              <input type="text" placeholder='Buscar' className='bg-[#170027] text-white border-none outline-none ring-0 p-2 rounded-l-[5px] h-11' required />
              <button className='bg-lightPurple h-[44] w-[60px] flex justify-center items-center rounded-r-[5px]'>
                <Image
                  src={Search}
                  alt="lupa"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </header>
  
          <div className='flex my-12 gap-6'>          
            <div className='flex-col items-center'>
              <h1 className='hidden lg:block text-lightPurple'>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
              <h1 className='block text-lightPurple text-3xl lg:hidden'>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
              <p className='hidden lg:block text-light mt-4 mb-6 p-header'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos animi soluta reiciendis aspernatur tempore, ex quam! Adipisci delectus quasi aperiam nisi repudiandae natus, porro, esse tempora recusandae, autem voluptatem distinctio.</p>
              <p className='block text-light text-base mt-4 mb-6 p-header lg:hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos animi soluta reiciendis aspernatur tempore, ex quam! Adipisci delectus quasi aperiam nisi repudiandae natus, porro, esse tempora recusandae, autem voluptatem distinctio.</p>
              <div className='flex gap-2'>
                <span className='text-lightPurple'>Veja mais</span>
                <Image
                  src={Arrow}
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            
              <Image
                src={Foto}
                alt="Logo"
                width={456}
                height={400}
                className=' hidden lg:block rounded-2xl'
              />
          </div>
        </div>
      </div>
      <div className="bg-green h-1"></div>
    </div>
  );
}
