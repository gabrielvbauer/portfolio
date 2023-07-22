import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main className="mx-auto h-full max-w-[1100px] px-8">
      <Link
        href="/"
        className="mt-36 flex items-center gap-4 text-4xl font-medium text-purple-500 transition-opacity hover:opacity-60 md:text-6xl"
        passHref
      >
        <ChevronLeft className="h-12 w-12 md:h-16 md:w-16" />
        Projetos
      </Link>

      <div className="mt-16 flex flex-col gap-10 md:flex-row md:flex-wrap">
        {projects.map((project) => {
          return (
            <div className="flex w-full flex-col overflow-hidden rounded-md md:flex-1">
              <Link href={project.url} passHref>
                <Image
                  src={project.imageUrl}
                  alt=""
                  width={"530"}
                  height={"231"}
                  className="max-h-[231px] w-full object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col bg-white-100 px-11 py-8">
                <div className="flex gap-8 text-sm text-purple-500">
                  {project.tags.map((tag) => (
                    <span>{tag}</span>
                  ))}
                </div>

                <div className="flex-1">
                  <h3 className="mt-7 text-2xl font-medium">{project.title}</h3>
                  <p className="mt-4 text-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <Link href={project.url} passHref className="ml-auto">
                  <span className="transition-colors hover:text-purple-500">
                    Ver projeto <ChevronRight className="inline-block" />
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
