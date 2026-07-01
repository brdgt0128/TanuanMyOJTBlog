import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import oldImg1 from '../../assets/d2c72bd2a0e9238bb5f678382138c66c9f1e18fe.png';
import oldImg2 from '../../assets/2cf62a57c1b8cbaf577cdfe9fae325a385401f90.png';
import oldImg3 from '../../assets/c2151fda3e2e133043a51014cfa73cd312e09752.png';
import oldImg4 from '../../assets/405bb002acee9f77041248e0a4fb6d418c7a9acd.png';
import januaryImg1 from '../../assets/january-onsite-demo.jpg';
import januaryImg2 from '../../assets/january-client-training.jpg';
import januaryImg3 from '../../assets/january-online-meeting.jpg';
import januaryImg4 from '../../assets/january-team-visit.jpg';
import februaryImg1 from '../../assets/february-going-to-makati.jpg';
import februaryImg2 from '../../assets/february-first-day-makati-ojt.jpg';
import februaryImg3 from '../../assets/february-makati-view.jpg';
import februaryImg4 from '../../assets/february-ojt-team.jpg';
import marchImg1 from '../../assets/march-office-aia-tower.jpg';
import marchImg2 from '../../assets/march-meeting-future-plans.jpg';
import marchImg3 from '../../assets/march-lunch-ramen.jpg';
import marchImg4 from '../../assets/march-after-ojt-tired.jpg';

export function BlogEntries() {
  const posts = [
    {
      image: oldImg1,
      date: 'Nov 04, 2025',
      title: 'Capstone Project Final Defense',
      description:
        'Deployed an Online Case Filing System for VAWC, ensuring reliability, scalability, and usability for community stakeholders.',
    },
    {
      image: oldImg2,
      date: 'Nov 07, 2025',
      title: 'Research Feast Top Performing Team',
      description:
        'Recognized as top performing team for outstanding collaboration, innovation, and excellence in project delivery.',
    },
    {
      image: oldImg3,
      date: 'Dec 02, 2025',
      title: 'Deployment of the Vawc System',
      description:
        'Received certificates of recognition for exceptional performance and contribution to the development team.',
    },
    {
      image: oldImg4,
      date: 'Dec 08, 2025',
      title: 'Beginning of OJT',
      description:
        'The first week of my practicum has been an incredible learning experience. Setting up my development environment and meeting my team.',
    },
    {
      image: januaryImg1,
      date: 'January 5, 2026',
      title: 'Pagadian city demo onsite',
      description:
        'We conducted an onsite system demo at a motorshop in Pagadian City and gained valuable experience presenting the system in a real business setting.',
    },
    {
      image: januaryImg2,
      date: 'January 12, 2026',
      title: 'Ozamis city demo onsite',
      description:
        'We trained the client at the autoshop and guided them on how to use the system clearly and effectively during the onsite demo.',
    },
    {
      image: januaryImg3,
      date: 'January 21, 2026',
      title: 'Demo with the Artist',
      description:
        'Our team collaborated well, discussed client concerns, and supported each other throughout the training and demonstration process.',
    },
    {
      image: januaryImg4,
      date: 'January 29, 2026',
      title: 'Onsite demo team',
      description:
        'Seeing the system used in an actual workplace helped me appreciate user training, teamwork, and solutions that support daily operations.',
    },
    {
      image: februaryImg1,
      date: 'February 16, 2026',
      title: 'Arrival in Manila',
      description:
        'We arrived at Manila Airport to begin our OJT in Makati City, feeling excited and motivated to experience a real professional environment.',
    },
    {
      image: februaryImg2,
      date: 'February 17, 2026',
      title: 'First Day of OJT in Makati',
      description:
        'Our first day of OJT in Makati was exciting and a little pressure-filled as we began learning real-world work experiences outside the classroom.',
    },
    {
      image: februaryImg3,
      date: 'February 23, 2026',
      title: 'View from Our Condominium',
      description:
        'The view from our condominium in Makati was refreshing after OJT and showed the modern skyline and vibrant atmosphere of the city.',
    },
    {
      image: februaryImg4,
      date: 'February 27, 2026',
      title: 'Moments with My OJT Team',
      description:
        'Spending time with my fellow OJT team helped us bond, share stories, and make our training journey more enjoyable and memorable.',
    },
    {
      image: marchImg1,
      date: 'March 2, 2026',
      title: 'In the Office at AIA Tower',
      description:
        'My OJT classmates and I were in the office at AIA Tower in Makati City, where we experienced a real professional environment that motivated us to learn and improve.',
    },
    {
      image: marchImg2,
      date: 'March 6, 2026',
      title: 'Meeting for Future Plans',
      description:
        'We had a meeting to discuss future plans, goals, project ideas, and upcoming tasks, while learning how professional teamwork and planning help achieve success.',
    },
    {
      image: marchImg3,
      date: 'March 12, 2026',
      title: 'Lunch at a Ramen Restaurant',
      description:
        'We had lunch at a ramen restaurant, and the founder shared valuable advice about career growth, hard work, and continuous learning after graduation.',
    },
    {
      image: marchImg4,
      date: 'March 18, 2026',
      title: 'After OJT - Feeling Tired',
      description:
        'After a long day at the office, I felt tired but also happy and proud because each day of OJT helps me gain real-world experience and prepare for my future career.',
    },
  ];

  return (
    <section id="blog" className="min-h-screen py-12 sm:py-16 md:py-24 grid-bg" style={{ backgroundColor: '#131309', borderTop: '1px solid #282812' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#f5a623' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#f5a623' }}>Journal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Blog Entries</h2>
        </motion.div>

        <div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="overflow-hidden transition-all duration-300 cursor-pointer group hover:-translate-y-1"
              style={{ backgroundColor: '#1b1b0d', border: '1px solid #282812' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,166,35,0.4)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(245,166,35,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#282812';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.36), ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs" style={{ color: '#555555' }}>
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>

                <h3
                  className="text-sm sm:text-base font-medium leading-snug transition-colors duration-300 min-h-[40px] sm:min-h-[44px]"
                  style={{
                    color: '#ffffff',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: '#888888',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
