import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import Buscar from '../../assets/buscar.svg';
import Foto from '../../assets/featured-image.png';

export default function Home() {
  return (
    <div>
      <div className="bg-darkPurple p-34">
        <div className="container mx-auto border border-red-500">
          <header className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100} 
            />

            <div className="flex mx-auto gap-2 text-white">
              {/*Home*/}
              <div className="container mx-auto border-left border-red-500"> <span className="border-l-2 border-green h-6 mx-[3px]"/>Home</div>
              {/*Sobre*/}
              <div className="container mx-auto border border-red-500">Sobre</div>
              {/*Categorias*/}
              <div className="container mx-auto border border-red-500">Categorias</div>
              {/*Contato*/}
              <div className="container mx-auto border border-red-500">Contato</div>
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
          <div className='pt-1'>
            <Image
              src={Foto}
              alt="Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-8">
        </div>
      </div>
    </div>
  );
}
