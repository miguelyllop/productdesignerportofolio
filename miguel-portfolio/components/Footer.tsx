import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <p>Handcrafted by Miguel</p>
        <div className="space-x-4">
          <Link href="/cv" className="hover:underline">
            CV
          </Link>
          <Link href="https://www.linkedin.com/in/yourusername" className="hover:underline">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}

