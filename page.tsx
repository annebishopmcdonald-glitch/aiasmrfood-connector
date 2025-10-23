import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">AI ASMR Food</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            AI ASMR Food creates fun, AI-generated food videos inspired by different days of the year. From comfort food
            to creative mashups, each video is designed to bring a bit of flavor and relaxation to your feed.
          </p>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto flex justify-center gap-8 text-sm">
          <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  )
}
