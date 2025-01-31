export default function FeaturedOnTV() {
  return (
    <div className="bg-marion-light min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-marion text-center mb-8">
          Featured on TV
        </h1>

        <p className="text-center text-gray-700 text-lg sm:text-xl mb-8">
          The LoonTune™ has been featured on multiple TV programs, showcasing
          its unique sound and handcrafted design. Watch the clips below to
          learn how this fascinating nature toy became a Minnesota favorite.
        </p>

        <div className="space-y-10">
          {/* Video 1 - Jason Davis Show */}
          <section className="space-y-4">
            <div className="aspect-video relative">
              <video
                controls
                className="w-full rounded-lg shadow-2xl"
                aria-label="The LoonTune Commercial"
              >
                <source
                  src="/assets/loontune-commercial.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-800 text-center text-sm sm:text-base">
              The LoonTune Commerical
            </p>
            <p className="text-center text-gray-500 text-xs sm:text-sm">
              📺 LoonTune
            </p>
          </section>
          {/* Video 1 - Jason Davis Show */}
          <section className="space-y-4">
            <div className="aspect-video relative">
              <video
                controls
                className="w-full rounded-lg shadow-2xl"
                aria-label="LoonTune Featured on Jason Davis Show"
              >
                <source src="/assets/loontune-channel-5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-800 text-center text-sm sm:text-base">
              Discover the story behind the LoonTune™ as featured on the Jason
              Davis show — a unique nature toy inspired by the natural calls of
              the common loon. In this segment, learn how entrepreneur Russ
              Rooney transformed the simple idea into a popular family business
              through meticulous experimentation and creative assembly.
            </p>
            <p className="text-center text-gray-500 text-xs sm:text-sm">
              📺 KSTP&apos;s On the Road with Jason Davis - Originally aired
              2/18/07
            </p>
          </section>

          {/* Video 2 - Ron Shara Show */}
          <section className="space-y-4">
            <div className="aspect-video relative">
              <video
                controls
                className="w-full rounded-lg shadow-2xl"
                aria-label="LoonTune on Ron Shara Show"
              >
                <source src="/assets/loontune-ron.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-800 text-center text-sm sm:text-base">
              This segment from the Ron Shara show features the LoonTune™&apos;s
              distinctive sound that captures the many voices of the common
              loon. It blends authentic call imitations with behind-the-scenes
              insights into its creation and development.
            </p>
            <p className="text-center text-gray-500 text-xs sm:text-sm">
              📺 Ron Schara&apos;s Minnesota Bound - Originally aired 12/18/05
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-marion font-semibold">
            Want to learn more about the LoonTune™?
          </p>
          <a
            href="/about"
            className="bg-marion text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-marion-dark transition-colors inline-block mt-4"
          >
            Read Our Story
          </a>
        </div>
      </div>
    </div>
  );
}
