import Image from "next/image"
import Link from "next/link"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const projects = [
    {
      title: "Virtual Clubs",
      company: "Sport Heroes",
      image: "/placeholder.svg?height=400&width=600",
      href: "/virtual-clubs"
    },
    {
      title: "Benchmarking",
      company: "United Heroes",
      image: "/placeholder.svg?height=400&width=600",
      href: "/benchmarking"
    },
    {
      title: "CO2 Feature",
      company: "United Heroes",
      image: "/placeholder.svg?height=400&width=600",
      href: "/co2"
    },
    {
      title: "Events Feature",
      company: "United Heroes",
      image: "/placeholder.svg?height=400&width=600",
      href: "/events"
    },
    {
      title: "Web Design",
      company: "SGWEAR",
      image: "/placeholder.svg?height=400&width=600",
      href: "/sgwear"
    },
    {
      title: "Web Design",
      company: "CHAOS",
      image: "/placeholder.svg?height=400&width=600",
      href: "/chaos"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Auto-scrolling Gallery */}
      <section className="w-full py-12">
        <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
          <div className="flex w-max animate-scroll-left space-x-4 p-4">
            {[...projects, ...projects].map((project, i) => (
              <div
                key={i}
                className="relative aspect-[16/10] w-[600px] shrink-0 overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                  fill
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">
          Miguel Plaza
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Product designer driven to condense complex interactions and data into meaningful experiences.
          Currently designing at{" "}
          <Link
            href="https://en.sportheroes.com/"
            target="_blank"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sport Heroes
          </Link>
          .
        </p>
      </section>

      {/* Project Index */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold tracking-tighter">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card key={i} className="overflow-hidden">
              <Link href={project.href}>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    fill
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.company}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

