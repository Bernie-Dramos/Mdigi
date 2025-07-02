// Gallery React Component
const Gallery = () => {
    const projects = [
        {
            title: "[Project 1 Name]",
            description: "[Project 1 Description - Briefly explain what this project is about and its impact.]",
            tech: "[Technologies Used]"
        },
        {
            title: "[Project 2 Name]",
            description: "[Project 2 Description - Briefly explain what this project is about and its impact.]",
            tech: "[Technologies Used]"
        },
        {
            title: "[Project 3 Name]",
            description: "[Project 3 Description - Briefly explain what this project is about and its impact.]",
            tech: "[Technologies Used]"
        },
        {
            title: "[Project 4 Name]",
            description: "[Project 4 Description - Briefly explain what this project is about and its impact.]",
            tech: "[Technologies Used]"
        }
    ];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    
    const nextProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const prevProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextProject();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="relative">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl min-h-96 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{projects[currentIndex].title}</h3>
                    <p className="text-gray-300 mb-6">{projects[currentIndex].description}</p>
                    <div className="bg-gray-700 inline-block px-4 py-2 rounded-lg">
                        <p className="text-green-400 font-mono">{projects[currentIndex].tech}</p>
                    </div>
                </div>
                <div className="flex justify-center mt-8 space-x-4">
                    <button onClick={prevProject} className="bg-gray-700 hover:bg-gray-600 text-cyan-400 p-3 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex space-x-2 items-center">
                        {projects.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextProject} className="bg-gray-700 hover:bg-gray-600 text-cyan-400 p-3 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl opacity-20 blur-sm -z-10"></div>
        </div>
    );
};

ReactDOM.render(<Gallery />, document.getElementById('gallery-container'));

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('nav', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from('#home h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from('#home p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: "power3.out"
  });

  gsap.from('#home button', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.9,
    ease: "power3.out"
  });

  // Scroll animations for sections
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  });
});
