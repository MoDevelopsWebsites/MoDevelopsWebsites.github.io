import React from 'react';

const PageBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Gaming Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1500&h=1000&fit=crop" 
          alt="Gaming Setup" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Left Side Gaming Element */}
      <div className="absolute -left-20 top-1/4 opacity-70 pointer-events-none rotate-12 scale-75 md:scale-100">
        <img 
          src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&h=800&fit=crop" 
          alt="Gaming Controller" 
          className="w-[500px] h-[500px] object-contain"
        />
      </div>
      
      {/* Right Side Gaming Element */}
      <div className="absolute -right-20 bottom-1/4 opacity-70 pointer-events-none -rotate-12 scale-75 md:scale-100">
        <img 
          src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=800&h=800&fit=crop" 
          alt="Gaming Headset" 
          className="w-[500px] h-[500px] object-contain"
        />
      </div>
      
      {/* Bottom Gaming Element */}
      <div className="absolute bottom-0 left-1/3 opacity-60 pointer-events-none -rotate-6">
        <img 
          src="https://images.unsplash.com/photo-1605979257913-1704eb7b6246?w=600&h=600&fit=crop" 
          alt="Gaming Mouse" 
          className="w-[400px] h-[400px] object-contain"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
    </div>
  );
};

export default PageBackground;