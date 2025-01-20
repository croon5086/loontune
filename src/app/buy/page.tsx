"use client";

export default function BuyPage() {
  const emailAddress = "info@loontune.com"; // Update to your actual sales email
  const subject = encodeURIComponent("Wholesale Inquiry - LoonTune");
  const body = encodeURIComponent(
    "Hello,\n\nI'm interested in carrying LoonTune in my store. Please provide details on wholesale pricing and order minimums.\n\nBest regards,\n[Your Name]\n[Your Business Name]"
  );

  return (
    <div className="min-h-screen bg-marion-light p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-marion text-center mb-6">
          Wholesale Orders for LoonTune
        </h2>

        {/* Wholesale Info Section */}
        <p className="text-lg text-gray-800 text-center mb-4">
          The LoonTune™ is primarily available for bulk orders and wholesale
          purchases. We work with retailers, gift shops, nature centers, and
          distributors.
        </p>
        <p className="text-gray-700 text-center mb-4">
          If you&apos;re interested in carrying LoonTunes in your store, please
          reach out for a quote, pricing, and order details.
        </p>

        {/* Contact Information */}
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-marion">
            For Wholesale Inquiries:
          </p>
          <a
            href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
            className="text-marion hover:text-marion-accent underline text-lg"
          >
            {emailAddress}
          </a>
        </div>

        <hr className="my-6 border-marion" />

        {/* Button to Open Email Client */}
        <div className="text-center">
          <a
            href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
            className="bg-marion text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-marion-dark transition-colors"
          >
            Email Us for Pricing
          </a>
        </div>
      </div>
    </div>
  );
}
