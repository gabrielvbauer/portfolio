import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    url: string;
    imageUrl: string;
  };
}

export function Project({ project }: ProjectProps) {
  const { title, description, tags, url, imageUrl } = project;

  return (
    <div className="flex flex-col gap-0 overflow-hidden rounded-lg md:flex-row">
      <div className="relative h-64 w-full bg-purple-500 md:h-auto md:max-w-xl">
        <Link href={url} passHref>
          <Image
            src={imageUrl}
            alt=""
            objectFit="cover"
            layout="fill"
            objectPosition="center"
          />
        </Link>
      </div>
      <div className="flex h-full flex-1 flex-col bg-white-100 px-11 py-8">
        <div className="flex gap-8 text-sm text-purple-500">
          {tags.map((tag) => {
            return <span>{tag}</span>;
          })}
        </div>

        <div className="flex-1">
          <h3 className="mt-7 text-2xl font-medium">{title}</h3>
          <p className="mt-4 text-xl leading-relaxed">{description}</p>
        </div>

        <Link href={url} target="_blank" className="ml-auto mt-4">
          <span className="transition-colors hover:text-purple-500">
            Ver projeto <ChevronRight className="inline-block" />
          </span>
        </Link>
      </div>
    </div>
  );
}
