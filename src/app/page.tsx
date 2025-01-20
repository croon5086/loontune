// src/app/page.tsx or pages/index.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-marion-light min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <section className="mb-12 text-center">
          <p className="text-2xl md:text-3xl font-medium text-marion leading-relaxed">
            Experience The LoonTune™ – a nature toy that captures the majestic
            call of the loon and brings the serene beauty of Minnesota’s lakes
            right to your hands.
          </p>
        </section>

        <hr className="border-marion my-10" />

        {/* LoonTune Description Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-shrink-0">
            <Image
              className="rounded-lg shadow-2xl"
              src="/assets/introloontune.jpg"
              alt="LoonTune introduction"
              width={186}
              height={238}
              priority
            />
          </div>
          <div className="md:flex-1">
            <p className="text-lg italic text-justify text-gray-800 mb-4">
              “The LoonTune is the hottest new item to hit the shelves.
              Fashioned after a classic button toy, it serenades with the true,
              majestic calls of the loon. Pull the cord and let nature’s melody
              transform your day.”
            </p>
            <p className="text-lg text-justify text-gray-700">
              Discover the originality and craftsmanship behind every LoonTune –
              a perfect blend of art, nature, and tradition.
            </p>
          </div>
        </section>

        <hr className="border-marion my-10" />

        {/* Perfect for the Lake and Home Section */}
        <section className="mb-12">
          <h4 className="text-3xl font-bold text-center mb-8 text-marion">
            Perfect for the Lake and Home
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex justify-center">
              <Image
                className="rounded-lg shadow-2xl"
                src="/assets/girlinuse1.jpg"
                alt="LoonTune in use by a girl"
                width={252}
                height={198}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-lg shadow-2xl"
                src="/assets/boyinuse.jpg"
                alt="LoonTune in use by another user"
                width={244}
                height={192}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-lg shadow-2xl"
                src="/assets/girlinuse2.jpg"
                alt="LoonTune in use by a boy"
                width={244}
                height={194}
              />
            </div>
          </div>
        </section>

        <hr className="border-marion my-10" />

        {/* Made in the USA Section */}
        <section className="mb-12">
          <h2 className="text-center text-2xl font-bold text-marion mb-6">
            Made in the USA!
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:flex-1 space-y-4">
              <p className="text-lg text-gray-800">
                Your LoonTune™ is proudly crafted in Minnesota with sustainable,
                locally sourced birch handles.
              </p>
              <p className="text-lg text-gray-700">
                Every unit is meticulously crafted, assembled, and packaged in
                the Twin Cities—a true testament to American craftsmanship.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-lg shadow-2xl"
                    src="/assets/mnoutline.jpg"
                    alt="Minnesota Outline"
                    width={82}
                    height={94}
                  />
                </div>
                <p className="text-lg text-gray-700">
                  Learn more about Minnesota at{" "}
                  <a
                    href="http://www.exploreminnesota.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-marion hover:text-marion-accent underline"
                  >
                    exploreminnesota.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-marion my-10" />

        {/* Relevant Links Section */}
        <section className="mb-12">
          <h4 className="text-2xl font-bold text-marion mb-4">
            Relevant Links
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://www.dnr.state.mn.us/birds/commonloon.html"
                className="text-marion hover:text-marion-accent underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                dnr.state.mn.us
              </a>{" "}
              – Information about the common loon.
            </li>
            <li>
              <a
                href="http://www.northshoreimages.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marion hover:text-marion-accent underline transition-colors"
              >
                northshoreimages.com
              </a>{" "}
              – Stunning photos of Minnesota’s North Shore.
            </li>
          </ul>
        </section>

        {/* Patented Info */}
        <section className="text-center">
          <p className="text-sm italic text-gray-600">
            <strong>The LoonTune is a Patented Product</strong> – U.S. Pat.
            7,997,951
          </p>
        </section>
      </div>
    </div>
  );
}
