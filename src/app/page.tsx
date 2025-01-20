import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-marion-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/logolake3.jpg"
            alt="LoonTune Logo"
            width={300}
            height={150}
            className="rounded w-auto h-auto"
          />
        </div>

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-marion mb-6">
            Experience the Sounds of the Loon
          </h1>
          <p className="text-lg sm:text-xl text-marion leading-relaxed">
            The LoonTune™ is a one-of-a-kind nature toy that authentically
            reproduces the calls of the Common Loon—a sound deeply rooted in
            Minnesota’s lakes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 sm:gap-6">
            <Link href="/buy">
              <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
                Buy Now
              </button>
            </Link>
            <Link href="/instructions">
              <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-marion-dark transition">
                How It Works
              </button>
            </Link>
          </div>
        </section>

        <hr className="border-marion my-10" />

        {/* History & Origin */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-marion mb-8">
            The Story Behind LoonTune™
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="mb-4 text-lg text-gray-800">
                The LoonTune journey began with Russ Rooney, an entrepreneur
                from Richfield, Minnesota, who set out to replicate the haunting
                calls of the Common Loon.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                What started as a garage experiment turned into a family
                business. Using a classic spinning toy concept, the Rooney
                family carefully refined the design to create perfectly tuned
                loon calls.
              </p>
              <p className="text-lg text-gray-700">
                Today, LoonTune™ continues to bring the spirit of the Northwoods
                to homes across America.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/about">
                  <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-marion-dark transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                className="rounded-lg shadow-2xl"
                src="/assets/introloontune.jpg"
                alt="LoonTune introduction"
                width={250}
                height={280}
                priority
              />
            </div>
          </div>
        </section>

        <hr className="border-marion my-10" />

        {/* Featured on TV */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-marion mb-8">
            As Seen on TV!
          </h2>
          <p className="text-lg text-gray-800 text-center mb-6">
            The LoonTune™ has been featured on Channel 5’s On the Road with
            Jason Davis and Ron Schara’s Minnesota Bound, showcasing its unique
            ability to mimic the authentic loon calls.
          </p>
          <div className="flex justify-center">
            <Link href="/featured-on-tv">
              <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-marion-dark transition">
                Watch
              </button>
            </Link>
          </div>
        </section>

        <hr className="border-marion my-10" />

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-marion mb-8">
            How Does the LoonTune Work?
          </h2>
          <p className="text-lg text-gray-800 text-center mb-6">
            The LoonTune™ makes two authentic loon calls—just like the real
            bird!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-marion mb-2">
                Tremolo
              </h3>
              <p className="text-gray-700">
                Often described as “insane laughter”, the Tremolo is a rapid
                series of notes that loons use as an alarm call. It is also the
                only call they make in flight.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-marion mb-2">
                Wail
              </h3>
              <p className="text-gray-700">
                The haunting Wail call echoes across lakes, used by loons to
                keep in contact with one another. It is often heard at night and
                can carry for miles.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/instructions">
              <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-marion-dark transition">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        <hr className="border-marion my-10" />

        {/* Made in the USA Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-marion mb-6">
            Made in the USA!
          </h2>
          <p className="text-lg text-gray-800 text-center">
            The LoonTune™ is proudly crafted in Minnesota using sustainable,
            locally sourced birch handles.
          </p>
          <p className="text-lg text-gray-700 text-center">
            Every unit is hand-assembled in the Twin Cities, ensuring the
            highest quality while supporting local craftsmanship.
          </p>
        </section>

        <hr className="border-marion my-10" />

        {/* Call-to-Action Buttons */}
        <section className="text-center">
          <h4 className="text-xl sm:text-2xl font-bold text-marion mb-6">
            Get Your Own LoonTune Today!
          </h4>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link href="/buy">
              <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
                Buy Now
              </button>
            </Link>
            <Link href="/instructions">
              <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-marion-dark transition">
                How It Works
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
