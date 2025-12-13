import { Download, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToBlog = () => {
    const element = document.getElementById('blog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#000000] pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl text-[#CECECE]">
            Hi, I'm <span className="text-white">Aldrin B. Tanuan</span>
          </h1>
          <p className="text-5xl text-[#919191]">
            A Frontend Developer
          </p>
          <p className="text-2xl text-[#919191] max-w-3xl mx-auto leading-relaxed">
            Passionate about building clean and functional digital experiences. 
            This blog documents my journey through my practicum and the continuous 
            learning that comes with being a developer.
          </p>

          <div className="flex items-center justify-center gap-6 pt-8">
            <button
              onClick={scrollToBlog}
              className="px-8 py-4 bg-[#353535] text-[#CECECE] border border-[#474747] 
                       hover:bg-[#474747] hover:border-[#919191] hover:scale-105 
                       transition-all duration-300 flex items-center gap-2"
            >
              View My Blog
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}