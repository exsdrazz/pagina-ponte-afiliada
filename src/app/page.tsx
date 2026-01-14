export default function Home() {
  const affiliateLink = "https://50be9bbofqbm7ke760maymwz2a.hop.clickbank.net/?&traffic_source=google&traffic_type=search&campaign=audifort_search_01&creative=headline_a&ad=ad_1";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Hearing Support Supplements
          </h1>
          <p className="text-base sm:text-lg mt-2">
            <span className="text-emerald-600">An Informational Overview</span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="text-emerald-600">Audifort</span> Hearing Support Supplement
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
            What You Should Know Before Visiting the Official Website
          </p>
          
          {/* Official Audifort Product Image */}
          <div className="flex justify-center py-8">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2a78ead5-62fd-4e60-b318-e648ba02ed7c.webp" 
              alt="Audifort Hearing Support Supplement"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Optional Hero CTA */}
          <div className="mt-8">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-base px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Learn More About Audifort
            </a>
          </div>
        </section>

        {/* Section 1 - Introduction */}
        <section className="mb-12 sm:mb-16 bg-gray-50 rounded-lg p-6 sm:p-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Many adults notice changes in their hearing over time. This is a common experience that may be influenced by various factors, including nutritional intake, lifestyle choices, and environmental exposure.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            While these changes are a natural part of aging for some, maintaining proper nutrition and supporting overall ear health may play a role in long-term auditory wellness.
          </p>
        </section>

        {/* Section 2 - Educational Content */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            How Hearing Support Supplements Work
          </h3>
          
          {/* Educational illustration */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4b6a4074-c1c0-499e-8957-5fef3cd462fd.png" 
              alt="Illustration of auditory support concept with sound waves"
              className="w-full max-w-xl h-auto rounded-lg shadow-sm"
            />
          </div>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            Hearing support supplements are designed to provide nutrients commonly associated with auditory and inner ear support. These formulas typically focus on delivering vitamins, minerals, and botanical ingredients that may contribute to overall ear health.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-base sm:text-lg text-gray-700">
                Supporting auditory and ear health through targeted nutrition
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-base sm:text-lg text-gray-700">
                Providing nutritional support for hearing wellness
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-base sm:text-lg text-gray-700">
                Focusing on long-term support rather than instant effects
              </span>
            </li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            These supplements are intended to complement a healthy lifestyle and are not designed to replace medical care or treatment.
          </p>
        </section>

        {/* Section 3 - Product Mention */}
        <section className="mb-12 sm:mb-16 bg-gray-50 rounded-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            About Audifort
          </h3>
          
          {/* Official Audifort Product Image */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2a78ead5-62fd-4e60-b318-e648ba02ed7c.webp" 
              alt="Audifort Healthy Healing Supplement"
              className="w-full max-w-sm h-auto"
            />
          </div>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Audifort is a hearing support formula designed to support auditory health using carefully selected ingredients. The formula combines vitamins, minerals, and botanical extracts commonly used in nutritional approaches to ear and hearing wellness.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
            Like other supplements in this category, Audifort is intended to complement a healthy lifestyle and provide nutritional support over time.
          </p>

          {/* CTA Button after About Audifort */}
          <div className="text-center">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-lg transition-colors duration-300"
            >
              Visit the Official Audifort Website
            </a>
          </div>
        </section>

        {/* Section 4 - Quality & Transparency */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            Quality & Manufacturing Standards
          </h3>
          
          {/* Quality/Manufacturing illustration */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adc8cf29-2a61-4222-bdb7-c288e7800266.png" 
              alt="Illustration of quality supplements and natural ingredients"
              className="w-full max-w-xl h-auto rounded-lg shadow-sm"
            />
          </div>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Audifort follows standard quality and manufacturing practices in the supplement industry. The product is manufactured in facilities that adhere to established guidelines for safety and quality control.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
            For complete information about specific ingredients, dosage recommendations, pricing options, and any available guarantees, we encourage you to visit the official Audifort website directly.
          </p>

          {/* CTA Button after Quality & Manufacturing Standards */}
          <div className="text-center">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-lg transition-colors duration-300"
            >
              Learn More on the Official Website
            </a>
          </div>
        </section>

        {/* Section 5 - Call to Action */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 sm:p-10 text-center">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg px-8 sm:px-12 py-4 rounded-lg transition-colors duration-300 hover:shadow-lg"
            >
              View Ingredients and Product Details
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Learn more about ingredients, pricing, and available guarantees on the official website.
            </p>
          </div>
        </section>

        {/* Section 6 - Disclaimer */}
        <section className="mb-12 sm:mb-16 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> This website is for informational purposes only and does not provide medical advice. The information presented here is not intended to diagnose, treat, cure, or prevent any disease or health condition. Results may vary from person to person. Always consult with a qualified healthcare professional before starting any new supplement regimen.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          {/* Affiliate Disclosure */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Affiliate Disclosure:</strong> This website may contain affiliate links. We may receive a commission if you purchase through our links at no additional cost to you. This helps support our work in providing informational content.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Terms of Use
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Affiliate Disclosure
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Health Support Guide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
