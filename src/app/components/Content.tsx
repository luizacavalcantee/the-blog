import Image from 'next/image';
import firstPost from '../../assets/post-1.png';
import secondPost from '../../assets/post-2.png';
import thirdPost from '../../assets/post-3.png';
import fourthPost from '../../assets/post-4.png';

export default function Content() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-20 border border-red-700">
        <div className="flex gap-20 border border-red-700">
            <div className="post w-[569px] border border-blue-700">
            <div>
                <Image
                src={firstPost} 
                alt="Post" 
                width={560}
                height={400}
                className='rounded-2xl'
                />
            
            <p className='date'>Janeiro 04, 2022</p>
            <h2 className='text-darkPurple my-4'>Começando no ReactJS em 2022</h2>
            <p className='w-[569px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
            </div>
            </div>
            <div className='w-[472px] border border-purple-700'>
            <div>
                <p className='data'>Janeiro 04, 2022</p>
                <h2 className='text-darkPurple'>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed pariatur quidem, unde, sit aperiam natus nihil, quaerat sunt nostrum numquam a! Voluptas odio pariatur voluptatibus alias voluptates repellat nihil dolor.</p>
            </div>

            <div className='border-t border-[#F2E7FA] my-6'></div>

            <div>
                <p className='data'>Janeiro 04, 2022</p>
                <h2 className='text-darkPurple'>Veja a evolução do Front-end na prática</h2>
                <p>lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed pariatur quidem, unde, sit aperiam natus nihil, quaerat sunt nostrum numquam a! Voluptas odio pariatur voluptatibus alias voluptates repellat nihil dolor.</p>
            </div>
            </div> 
        </div>
        
        <div className='container flex my-16 gap-[30px]'>
          <div className="w-[370px]">
            <div>
              <Image
                src={secondPost} 
                alt="Post" 
                width={370}
                height={400}
                className='rounded-2xl'
              />
            
            <p className='date'>Janeiro 04, 2022</p>
            <h2 className='text-darkPurple my-4'>Começando no ReactJS em 2022</h2>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                src={thirdPost} 
                alt="Post" 
                width={370}
                height={400}
                className='rounded-2xl'
              />
            
            <p className='date'>Janeiro 04, 2022</p>
            <h2 className='text-darkPurple my-4'>Começando no ReactJS em 2022</h2>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                src={fourthPost} 
                alt="Post" 
                width={370}
                height={400}
                className='rounded-2xl'
              />
            
            <p className='date'>Janeiro 04, 2022</p>
            <h2 className='text-darkPurple my-4'>Começando no ReactJS em 2022</h2>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse nam fugiat illo at quasi maiores odio rem natus? Asperiores nulla molestiae commodi corporis? Totam, exercitationem vel! Harum, deleniti voluptatum.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}