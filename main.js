// Gallery React Component
const Gallery = () => {
    const projects = [
        {
            title: "Rotaract Club Website",
            description: "The Rotaract Club website, developed by our tech team, is a vibrant online platform for young adults aged 18+, promoting leadership and " +
            "community service. It showcases the club's mission to drive positive change through local and global projects, featuring membership details, events," +
            "and service areas like Community and International Service. Built with a focus on user engagement, it reflects our expertise in creating impactful" + 
            "digital solutions.",
            tech: "HTML5 | CSS3 | JavaScript | React | Tailwind CSS | Netlify"
        },
        {
            title: "Personal Portfolio Website",
            description: "The Bernardo Dramos Portfolio website, crafted by our tech team, is a sleek online showcase for a professional’s work, designed to highlight" + 
            "skills and projects with a modern interface. Built with a focus on user experience, it features a dynamic layout with interactive elements, reflecting our" +
            "expertise in creating engaging digital solutions. Hosted on Netlify, this project leverages cutting-edge technologies to deliver a responsive and efficient " +
            "platform.",
            tech: "HTML5 | CSS3 | JavaScript | React | Tailwind CSS | Netlify"
        },
        {
            title: "E-Commerce Platform",
            description: "The E-commerce Website, developed by our tech team, is a robust online shopping platform designed to offer a seamless shopping experience with" +
            "secure payment options and real-time delivery updates. Featuring a responsive design and intuitive navigation, it showcases products, manages transactions," + 
            "and integrates with leading payment gateways like Stripe and tracking systems like AfterShip. This project highlights our expertise in building scalable," + 
            "customer-focused digital solutions with a focus on performance and security.",
            tech: "HTML5 | CSS3 | JavaScript | Python | SQL | React | Bootstrap | Node.js | Express.js | Django | API "
        },
        {
            title: "Coffee Shop Website",
            description: "The Coffee Shop Website, created by our tech team, is a simple yet elegant online platform designed to showcase the cozy ambiance of the coffee shop," + 
            "its diverse menu of beverages and treats, and its precise location. With an intuitive layout and responsive design, it provides customers with easy access to" +
            "offerings and contact details, reflecting our expertise in crafting user-friendly digital solutions tailored to small businesses.",
            tech: "HTML5 | CSS3 | JavaScript | React | Tailwind CSS | WordPress | API | Netlify"
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

// Only run this code if on contacts.html
if (document.querySelector('.contact-section')) {
  // React component for Navbar
  function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-90 z-50 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-cyan-400">STM</div>
          <div className="space-x-6">
            <a href="index.html#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="index.html#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="index.html#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    );
  }

  // Render Navbar if #navbar exists (if you want to use React for navbar)
  if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
  }

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Slide-up animation for contact section
  gsap.from(".animate-slide-up", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".animate-slide-up",
      start: "top 80%",
    },
  });

  // Simulate form submission
  document.getElementById('submit-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `mailto:[Your Email Address]?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  });
}
