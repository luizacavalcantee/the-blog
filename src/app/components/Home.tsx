import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import Buscar from '../../assets/buscar.svg';
import Arrow from '../../assets/arrow-right.svg';
import Foto from '../../assets/featured-image.png';

export default function Home() {
  return (
    <div className="bg-darkPurple py-8">
      <div className="container mx-auto px-20">
        <header className="flex items-center justify-between">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100} 
            className='mr-28'
          />
          <div className="flex ml-auto gap-4 text-white mx-auto">
            <div className="container mx-auto"> 
              <span className="border-l-2 border-green h-6 mx-[3px]"/>
              <strong>Home</strong>
            </div>
            <div className="container mx-auto">Sobre</div>
            <div className="container mx-auto">Categorias</div>
            <div className="container mx-auto">Contato</div>
          </div>
          <div>
          <Image
            src={Buscar}
            alt="Logo"
            width={300}
            height={300}
          />
        </div>
          
        </header>
        <div className='flex my-12 gap-6'>          
          <div className='flex-col items-center'>
            <h1 className='text-lightPurple'>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
            <p className='text-light mt-4 mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos animi soluta reiciendis aspernatur tempore, ex quam! Adipisci delectus quasi aperiam nisi repudiandae natus, porro, esse tempora recusandae, autem voluptatem distinctio.</p>
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
            className='rounded-2xl'
          />
        </div>
      </div>
    </div>
  );
}
