import Image from 'next/image';
import firstPost from '../../assets/post-1.png';
import secondPost from '../../assets/post-2.png';
import thirdPost from '../../assets/post-3.png';
import fourthPost from '../../assets/post-4.png';

export default function Content() {
  return (
    <div id='sobre' className="bg-white py-16 w-full">
      <div className="container mx-auto px-10 lg:container mx-auto px-20">
        <div className="lg:flex gap-20">
            <div className="post">
              <div>
                <Image
                src={firstPost} 
                alt="Post" 
                className='rounded-2xl w-auto'
                />
                <p className='my-1'>Janeiro 04, 2022</p>
                <h2 className='text-darkPurple mb-2'>Começando no ReactJS em 2022</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
              </div>
            </div>

            <div className='border-t border-[#F2E7FA] my-6 lg:hidden'></div>

            <div>
              <div>
                <p className='data'>Janeiro 04, 2022</p>
                <h2 className='text-darkPurple mb-2'>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed pariatur quidem, unde, sit aperiam natus nihil, quaerat sunt nostrum numquam a! Voluptas odio pariatur voluptatibus alias voluptates repellat nihil dolor.</p>
              </div>

              <div className='border-t border-[#F2E7FA] my-6'></div>

              <div>
                <p className='data'>Janeiro 04, 2022</p>
                <h2 className='text-darkPurple mb-2'>Veja a evolução do Front-end na prática</h2>
                <p>lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed pariatur quidem, unde, sit aperiam natus nihil, quaerat sunt nostrum numquam a! Voluptas odio pariatur voluptatibus alias voluptates repellat nihil dolor.</p>
              </div>
            </div> 
        </div>

        <div className='border-t border-[#F2E7FA] my-6 lg:hidden'></div>

        <div id='publicações' className='lg:flex mt-16 gap-8'>
          <div>
            <Image
              src={secondPost} 
              alt="Post 1" 
            />
            <p className='mt-2'>Janeiro 04, 2022</p>
            <h2 className='text-darkPurple my-1'>10 dicas para conseguir a vaga desejada</h2>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
          </div>

          <div className='border-t border-[#F2E7FA] my-6 lg:hidden'></div>

          <div>
            <Image
              src={thirdPost} 
              alt="Post 1" 
            />
            <p className='mt-2'>Janeiro 04, 2022</p>
            <h2 className='text-darkPurple my-1'>Deixe seu código mais semântico com essas dicas</h2>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
          </div>

          <div className='border-t border-[#F2E7FA] my-6 lg:hidden'></div>
          
          <div>
            <Image
              src={fourthPost} 
              alt="Post 1" 
            />
            <p className='mt-2'>Janeiro 04, 2022</p>
            <h2 className='text-darkPurple my-1'>Use essas dicas nas suas aplicações mobile</h2>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}