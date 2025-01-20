import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-marion-light min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/logolake3.jpg"
            alt="LoonTune Logo"
            width={400}
            height={200}
            className="rounded"
          />
        </div>
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-marion mb-6">
            Experience the Sounds of the Loon
          </h1>
          <p className="text-xl md:text-2xl text-marion leading-relaxed">
            The LoonTune™ is a one-of-a-kind nature toy that authentically
            reproduces the calls of the &quot;Common Loon&quot;—a sound deeply
            rooted in Minnesota&apos;s natural beauty.
          </p>
          <div className="flex justify-center mt-8 gap-6">
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
          <h2 className="text-3xl font-bold text-center text-marion mb-8">
            The Story Behind LoonTune™
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:flex-1">
              <p className="mb-4 text-lg text-gray-800">
                At LoonTune, we celebrate &quot;innovation and creativity&quot;
                inspired by the natural sounds of the Northwoods. Our journey
                began when entrepreneur &quot;Russ Rooney&quot;, an inventor
                from Richfield, Minnesota, set out to replicate the iconic,
                haunting calls of the &quot;common loon&quot;.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                What started as an &quot;experiment in his basement&quot; turned
                into a family-run business. Using a &quot;classic spinning toy
                concept&quot;, the Rooney family carefully refined the
                design—adjusting holes in a hollow disc to create
                &quot;perfectly tuned loon calls&quot;.
              </p>
              <p className="text-lg text-gray-700">
                Today, LoonTune continues to bring the &quot;spirit of the
                Northwoods&quot; to homes across America.
              </p>
              <div className="flex justify-center">
                <Link href="/about">
                  <button className="bg-marion text-white py-3 px-6 rounded-lg shadow-md hover:bg-marion-dark transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-center text-marion mb-8">
            As Seen on TV!
          </h2>
          <p className="text-lg text-gray-800 text-center mb-6">
            The &quot;LoonTune™&quot; has been featured on &quot;Channel 5 with
            Jason Davis&quot; and the &quot;Ron Schara Show&quot;, showcasing
            its unique ability to mimic the calls of the loon.
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
          <h2 className="text-3xl font-bold text-center text-marion mb-8">
            How Does the LoonTune Work?
          </h2>
          <p className="text-lg text-gray-800 text-center mb-6">
            The &quot;LoonTune™&quot; makes &quot;two authentic loon
            calls&quot;—just like the real bird!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-marion mb-2">Tremolo</h3>
              <p className="text-gray-700">
                Often described as &quot;“insane laughter”&quot;, the Tremolo is
                a rapid series of notes that loons use as an &quot;alarm
                call&quot;. It is also the &quot;only&quot; call they make in
                flight.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-marion mb-2">Wail</h3>
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
          <h2 className="text-center text-3xl font-bold text-marion mb-6">
            Made in the USA!
          </h2>
          <p className="text-lg text-gray-800 text-center">
            Your &quot;LoonTune™&quot; is proudly crafted in
            &quot;Minnesota&quot; with sustainable, locally sourced birch
            handles.
          </p>
          <p className="text-lg text-gray-700 text-center">
            Every unit is &quot;hand-assembled&quot; in the &quot;Twin
            Cities&quot;, ensuring the highest quality while supporting local
            craftsmanship.
          </p>
        </section>

        <hr className="border-marion my-10" />

        {/* Call-to-Action Buttons */}
        <section className="text-center">
          <h4 className="text-2xl font-bold text-marion mb-6">
            Get Your Own LoonTune Today!
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-6">
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
