import { Calendar } from 'lucide-react';
import img1 from '../../assets/d2c72bd2a0e9238bb5f678382138c66c9f1e18fe.png';
import img2 from '../../assets/2cf62a57c1b8cbaf577cdfe9fae325a385401f90.png';
import img3 from '../../assets/c2151fda3e2e133043a51014cfa73cd312e09752.png';
import img4 from '../../assets/405bb002acee9f77041248e0a4fb6d418c7a9acd.png';

export function BlogEntries() {
  const posts = [
    {
      image: img1,
      date: 'Nov 04, 2025',
      title: 'Capstone Project Final Defense',
      description: 'Deployed an Online Case Filing System for VAWC, ensuring reliability, scalability, and usability for community stakeholders.',
    },
    {
      image: img2,
      date: 'Nov 07, 2025',
      title: 'Research Feast Top Performing Team',
      description: 'Recognized as top performing team for outstanding collaboration, innovation, and excellence in project delivery.',
    },
    {
      image: img3,
      date: 'Dec 02, 2025',
      title: 'Deployment of the Vawc System',
      description: 'Received certificates of recognition for exceptional performance and contribution to the development team.',
    },
    {
      image: img4,
      date: 'Dec 08, 2025',
      title: 'Beginning of OJT',
      description: 'The first week of my practicum has been an incredible learning experience. Setting up my development environment and meeting my team.',
    },
  ];

  return (
    <section id="blog" className="min-h-screen bg-[#353535] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl text-[#CECECE] mb-16 text-center">
          Blog Entries
        </h2>

        {/* 4 columns only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#474747] border border-[#919191] overflow-hidden 
                       hover:border-[#CECECE] hover:scale-105 
                       transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4 bg-[#353535]">
                <div className="flex items-center gap-4 text-sm text-[#919191]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl text-white group-hover:text-[#CECECE] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[#CECECE] text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}