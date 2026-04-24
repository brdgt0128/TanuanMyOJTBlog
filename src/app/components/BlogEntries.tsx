import { Calendar } from 'lucide-react';
import img1 from '../../assets/january-onsite-demo.jpg';
import img2 from '../../assets/january-client-training.jpg';
import img3 from '../../assets/january-online-meeting.jpg';
import img4 from '../../assets/january-team-visit.jpg';

export function BlogEntries() {
  const posts = [
    {
      image: img1,
      date: 'January 5 - January 30, 2026',
      title: 'JANUARY OJT',
      description:
        'January was an exciting and productive month during my OJT. We conducted an onsite system demo at a motorshop, which gave me valuable experience presenting the system in a real business setting.',
    },
    {
      image: img2,
      date: 'January 5 - January 30, 2026',
      title: 'JANUARY OJT',
      description:
        'We also trained the client at the autoshop and guided them on how to use the system effectively. This helped me improve my communication skills and learn how to explain technical workflows clearly to users.',
    },
    {
      image: img3,
      date: 'January 5 - January 30, 2026',
      title: 'JANUARY OJT',
      description:
        'January included productive collaboration with our team as we coordinated updates, discussed client concerns, and supported one another during the training and demonstration process.',
    },
    {
      image: img4,
      date: 'January 5 - January 30, 2026',
      title: 'JANUARY OJT',
      description:
        'Seeing the system used in an actual workplace helped me understand its practical applications. It made me appreciate the importance of user training, teamwork, and building solutions that truly support daily operations.',
    },
  ];

  return (
    <section id="blog" className="min-h-screen bg-[#353535] py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#CECECE] mb-8 sm:mb-12 md:mb-16 text-center">
          Blog Entries
        </h2>

        {/* 4 columns only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 bg-[#353535]">
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#919191]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl text-white group-hover:text-[#CECECE] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[#CECECE] text-xs sm:text-sm leading-relaxed">
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
