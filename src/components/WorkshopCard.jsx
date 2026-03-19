const WorkshopCard = ({ workshop }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="h-64 relative overflow-hidden">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 group-hover:bg-black/80 transition-all duration-300 z-[1]"></div>

        <div className="absolute inset-0 flex items-center justify-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center uppercase tracking-wider">
            {workshop.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
