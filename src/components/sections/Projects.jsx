import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2"> Gemini Clone </h3>
              <p className="text-gray-400 mb-4">
                A Gemini clone can be a powerful tool for experimenting with
                conversational AI, creating chatbots, or even integrating
                complex machine learning models into applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React DOM", "Vite", "@Google/GenerativeAI"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Subham-72/Gemini-Clone/tree/main/gemini-clone"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➜ [Github]
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2"> E-Commerce Web App </h3>
              <p className="text-gray-400 mb-4">
                This is a full-stack shopping platform I built to explore how
                real-world e-commerce systems work. The project helped me
                understand user authentication, product management, cart
                functionality, and integrating frontend with backend APIs. I
                also learned how to structure databases, handle secure routes,
                and design a smooth user experience from product browsing to
                checkout.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "React Router DOM",
                  "Axios",
                  "React Toastify",
                  "Vite",
                  "Tailwind CSS",
                  "ESLint",
                  "Node.js",
                  "Express.js",
                  "Mongoose",
                  "JWT (JSON Web Token)",
                  "bcrypt",
                  "Cloudinary",
                  "Multer",
                  "CORS",
                  "Stripe",
                  "Razorpay",
                  "Nodemon",
                  "dotenv",
                  "Validator",
                  "PostCSS",
                  "Autoprefixer",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Subham-72/E-COMMERCE"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➜ [Github]
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
