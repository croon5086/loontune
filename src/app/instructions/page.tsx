import Image from "next/image";

export default function InstructionsPage() {
  return (
    <div className="min-h-screen bg-marion-light py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-marion text-center mb-6">
          The LoonTune
        </h2>
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Get the Best Loon Toy Around!
        </h3>

        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/logolake3.jpg"
            alt="LoonTune Logo"
            width={200}
            height={100}
            className="rounded"
          />
        </div>

        {/* Description of the LoonTune Sounds */}
        <section className="mb-10">
          <h4 className="text-lg sm:text-xl font-bold text-marion text-center mb-4">
            The LoonTune creates two authentic loon calls:
          </h4>
          <p className="text-center text-gray-700 mb-6">
            The LoonTune is designed to imitate both the{" "}
            <strong>tremolo</strong> and <strong>wail</strong> sounds of the
            common loon, capturing the unique calls that echo across lakes and
            forests.
          </p>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-md">
              <h5 className="text-lg font-semibold text-marion">Tremolo</h5>
              <p className="text-gray-700">
                The tremolo is often described as &quot;insane laughter&quot;—a
                series of 8 to 10 rapid notes that vary in intensity. It is the
                only call that loons make while in flight.
              </p>
            </div>
            <div className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-md">
              <h5 className="text-lg font-semibold text-marion">Wail</h5>
              <p className="text-gray-700">
                The wail is a haunting call, often heard in the evening or at
                night. This sound travels for miles and is used by loons to stay
                in contact with others on the same lake and nearby lakes.
              </p>
            </div>
          </div>
        </section>

        {/* Instructions Section - More Visually Separated */}
        <section className="mt-12 p-5 sm:p-6 bg-marion-lightest rounded-lg shadow-md border border-marion">
          <h4 className="text-xl sm:text-2xl font-bold text-marion text-center mb-4">
            How to Use Your LoonTune
          </h4>
          <p className="text-center text-gray-700 mb-4">
            Follow these simple steps to enjoy the authentic calls of the loon.
          </p>
          <ol className="list-decimal list-inside space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow">
            <li className="text-marion text-sm sm:text-base">
              Hold both handles of the LoonTune in one hand. With your other
              hand, spin the LoonTune disc.
            </li>
            <li className="text-marion text-sm sm:text-base">
              Continue spinning the disc until most of the string is twisted.
            </li>
            <li className="text-marion text-sm sm:text-base">
              Pull the handles outward and inward, allowing the string to unwind
              and twist again.
            </li>
            <li className="text-marion text-sm sm:text-base">
              Enjoy the wail and tremolo sounds of the loon!
            </li>
          </ol>
          <p className="mt-6 text-center text-black-600 font-semibold text-sm sm:text-base">
            ⚠️ Adult supervision is recommended for children using this product.
          </p>
        </section>
      </div>
    </div>
  );
}
