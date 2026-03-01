import { workshops } from '../data/dummyData';

const Workshops = () => {
  // Artistic backgrounds for workshop tiles
  const paintingBackgrounds = {
    day1: [
      'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=600', // Medicine
      'https://images.pexels.com/photos/1105953/pexels-photo-1105953.jpeg?auto=compress&cs=tinysrgb&w=600', // Pathology
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600', // Surgery
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600', // Community Medicine
      'https://images.pexels.com/photos/1030643/pexels-photo-1030643.jpeg?auto=compress&cs=tinysrgb&w=600', // ENT
      'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=600', // Orthopedics
    ],
    day2: [
      'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600', // Crime Scene
      'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600', // Microbiology
      'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600', // Biochemistry
      'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600', // Paediatrics
      'https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg?auto=compress&cs=tinysrgb&w=600', // Psychiatry
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600', // Ophthalmology
    ],
    day3: [
      'https://images.pexels.com/photos/271708/pexels-photo-271708.jpeg?auto=compress&cs=tinysrgb&w=600', // Autopsy
      'https://images.pexels.com/photos/262706/pexels-photo-262706.jpeg?auto=compress&cs=tinysrgb&w=600', // Obsgyn
      'https://images.pexels.com/photos/263473/pexels-photo-263473.jpeg?auto=compress&cs=tinysrgb&w=600', // Emergency Medicine
    ]
  };

  const DaySection = ({ title, data, backgrounds, darkBg = false }) => (
    <section className={`py-20 px-4 ${darkBg ? 'bg-renaissance-burgundy/10' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-title font-black text-center text-renaissance-burgundy mb-16 uppercase italic">
          {title}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((workshop, index) => (
            <div
              key={workshop.id}
              className="relative group h-72 overflow-hidden rounded-2xl bg-renaissance-dark shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70"
                style={{ backgroundImage: `url(${backgrounds[index % backgrounds.length]})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h4 className="text-2xl md:text-3xl font-title font-black text-white uppercase tracking-tighter drop-shadow-lg scale-90 group-hover:scale-100 transition-transform duration-500">
                  {workshop.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen font-body bg-renaissance-cream text-renaissance-dark">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1920&h=1080')`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-renaissance-dark/75 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-title font-black text-white tracking-widest uppercase mb-4 drop-shadow-2xl">
            WORKSHOPS
          </h1>
          <p className="text-sm md:text-base font-body text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed italic">
            Explore 15 engaging workshops across three days, designed for a modern academic conference experience.
          </p>
          <button className="px-12 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-title font-bold uppercase tracking-[0.3em] hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-500 shadow-2xl">
            OUR SCHEDULE
          </button>
        </div>
      </section>

      {/* Daily Sections */}
      <DaySection title="Day 1" data={workshops.day1} backgrounds={paintingBackgrounds.day1} />
      <DaySection title="Day 2" data={workshops.day2} backgrounds={paintingBackgrounds.day2} darkBg={true} />
      <DaySection title="Day 3" data={workshops.day3} backgrounds={paintingBackgrounds.day3} />
    </div>
  );
};

export default Workshops;
