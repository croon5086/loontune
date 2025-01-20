// src/app/featured-on-tv/page.tsx
export default function FeaturedOnTV() {
  return (
    <div className="bg-marion-light min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-marion text-center mb-12">
          Featured on TV
        </h1>

        <div className="space-y-12">
          {/* Video 1 */}
          <div className="aspect-video relative">
            <video controls className="w-full rounded-lg shadow-2xl">
              <source src="/assets/loontune-channel-5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-4 text-marion text-center">
              Discover the story behind the LoonTune as featured on the Jason
              Davis show — a unique nature toy inspired by the natural calls of
              the common loon. In this segment, learn how entrepreneur Russ
              Rooney transformed the simple idea into a popular family business
              through meticulous experimentation and creative assembly.
            </p>
          </div>

          {/* Video 2 - Ron Shara Show */}
          <div className="aspect-video relative">
            <video controls className="w-full rounded-lg shadow-2xl">
              <source src="/assets/loontune-ron.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-4 text-marion text-center">
              This segment from the Ron Shara show features the LoonTune&apos;s
              distinctive sound that captures the many voices of the common
              loon, blending authentic call imitations with behind-the-scenes
              insights into its creation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
