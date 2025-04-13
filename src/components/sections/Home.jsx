import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Subham Singh
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a first-year student currently diving into front-end web
            development. I'm learning HTML, CSS, JavaScript, and frameworks like
            Tailwind and React. I enjoy building clean, responsive interfaces
            and love turning ideas into functional websites. Eager to grow and
            explore more in the world of web tech!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
