import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description: string;
}

export default function VideoPlayer({ videoId, title, description }: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://youtube.com/shorts/${videoId}`;

  return (
    <div className="w-full max-w-7xl mx-auto px-1 sm:px-4">
      <div 
        className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 transform hover:scale-[1.01] transition-transform duration-300"
        style={{ 
          aspectRatio: '16/11',
          minHeight: '500px',
          height: 'clamp(500px, 80vh, 800px)'
        }}
      >
      {!isLoaded && !hasError ? (
        // Custom Thumbnail with Play Button
        <div className="relative w-full h-full group cursor-pointer" onClick={handleLoadVideo}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={handleError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300 flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-700 rounded-full p-6 sm:p-8 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
            <h4 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 drop-shadow-lg">{title}</h4>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl drop-shadow-md">{description}</p>
          </div>
        </div>
      ) : hasError ? (
        // Error Fallback
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white p-8 sm:p-16">
          <div className="text-center">
            <div className="bg-red-600 rounded-full p-6 sm:p-8 mb-6 sm:mb-8 mx-auto w-fit">
              <ExternalLink className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Video Not Available</h4>
            <p className="text-gray-300 mb-8 sm:mb-10 text-lg sm:text-xl lg:text-2xl">Watch our story directly on YouTube</p>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-3 sm:mr-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      ) : (
        // YouTube Embed
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      )}
      </div>
    </div>
  );
}