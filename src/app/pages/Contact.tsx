import Image from 'next/image';
import Mail from '../../assets/mail.svg';
import Call from '../../assets/call.svg';
import Chat from '../../assets/chat.svg';

export default function Contact() {
    return (
      <div>
        <div className="bg-lightPurple h-1"></div>
        <div id="contato" className="bg-darkPurple py-12 w-full">
            <div className="container mx-auto px-10 lg:container mx-auto px-20">
                <div className="lg:flex text-white items-center">
                    <h1 className='text-lightPurple mr-auto'>Contato</h1>
                    <div className='mt-4 lg:mx-auto'>
                        <Image
                            src={Mail}
                            alt="Email"
                            width={40}
                            height={40} 
                        />
                        <h2 className='text-xl my-1'>E-mail</h2>
                        <p>Tem alguma dúvida?</p>
                        <p>meajuda@gmail.com</p>
                    </div>
                    <div className='mt-4 lg:mx-auto'>
                        <Image
                            src={Call}
                            alt="Ligação"
                            width={40}
                            height={40} 
                        />
                        <h2 className='text-xl my-1'>Telefone</h2>
                        <p>Você pode ligar a qualquer hora</p>
                        <p>81 99999-9999</p>
                    </div>
                    <div className='mt-4 lg:ml-auto'>
                        <Image
                            src={Chat}
                            alt="Chat"
                            width={40}
                            height={40} 
                        />
                        <h2 className='text-xl my-1'>Chat</h2>
                        <p>Precisa de alguma ajuda agora?</p>
                        <p>Basta enviar uma mensagem</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  