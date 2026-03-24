import { Calendar, Clock } from 'lucide-react';
import Button from './Button';
import OptimizedImage from './OptimizedImage';

const EventCard = ({ event, onSeeMore }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="h-80 relative overflow-hidden">
        <OptimizedImage
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 z-[1]"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 uppercase tracking-wide">
            {event.title}
          </h3>
          {event.subtitle && (
            <p className="text-[#D4AF37] text-lg md:text-xl mb-3 font-semibold">
              {event.subtitle}
            </p>
          )}

          {event.date && (
            <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
          )}

          {event.time && (
            <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
          )}

          <Button
            variant="primary"
            className="w-full md:w-auto"
            onClick={() => onSeeMore && onSeeMore(event)}
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
