export default function App() {
  return (
    <div>
      <div className="shadow sticky top-0">
        <div className="max-w-5xl h-[80px]  mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-xl font-bold text-blue-400">Sml Desing</div>
            <div className="text-sm font-semibold text-blue-200">
              By Creative Shamiul
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-sm font-semibold cursor-pointer hover:text-blue-400 ease-linear duration-300">
              Gallery
            </div>
            <div className="text-sm font-semibold cursor-pointer hover:text-blue-400 ease-linear duration-300">
              Illustration
            </div>
            <div className="text-sm font-semibold cursor-pointer hover:text-blue-400 ease-linear duration-300">
              Download
            </div>
            <div className="text-sm font-semibold cursor-pointer hover:text-blue-400 ease-linear duration-300">
              Echosystem
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex items-center gap-x-8 my-[40px]">
        <div className="flex-1">
          <div className="text-5xl font-semibold text-blue-500">
            SML Design Gallery
          </div>
          <div className="text-2xl font-400 text-blue-400 my-4">
            Discover SML illustrations to power up your project.
          </div>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:scale-110 ease-linear duration-300">
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://iradesign.io/assets/img/ira_gallery.png"
            className="w-full object-cover"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}
