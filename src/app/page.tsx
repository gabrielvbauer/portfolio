import Image from "next/image";
import Link from "next/link";
import { Linkedin, GithubIcon, Mail, ChevronRight } from "lucide-react";
import { Project } from "@/components/Project";
import dayjs from "dayjs";
import { projects } from "@/data/projects";

export default function Home() {
  const yearsOfExperience = dayjs().diff("2019-07-01", "year");
  const age = dayjs().diff("2002-06-29", "year");

  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="mx-auto h-full max-w-[1100px] px-8">
      <section className="flex h-screen flex-col justify-center">
        <div className="">
          <span className="text-md inline-block md:text-lg">
            Olá, eu me chamo Gabriel
          </span>
          <h1 className="text-6xl font-semibold md:text-8xl">
            <span className="text-purple-500">React</span> Developer
          </h1>
          <p className="mt-6 max-w-[727px] text-lg leading-loose md:text-2xl">
            Sou um{" "}
            <span className="font-medium text-purple-500">
              Desenvolvedor Fullstack{" "}
            </span>
            com {yearsOfExperience} anos de experiência, utilizando
            principalmente{" "}
            <span className="font-medium text-purple-500">ReactJS</span> e{" "}
            <span className="font-medium text-purple-500">NodeJS</span> com{" "}
            <span className="font-medium text-purple-500">TypeScript</span> e{" "}
            também{" "}
            <span className="font-medium text-purple-500">UX/UI com Figma</span>
          </p>
        </div>

        <div className="mt-14 flex gap-6">
          <Link
            href="https://linkedin.com/in/gabrielvbauer"
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500 transition-opacity hover:opacity-80"
          >
            <Linkedin color="#FFF" />
          </Link>
          <Link
            href="https://github.com/gabrielvbauer"
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500 transition-opacity hover:opacity-80"
          >
            <GithubIcon color="#FFF" />
          </Link>
          <Link
            href="mailto:gabriel.bauer9@hotmail.com"
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500 transition-opacity hover:opacity-80"
          >
            <Mail color="#FFF" />
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="text-4xl font-medium text-purple-500 md:text-6xl">
            Projetos
          </h2>
          <Link
            href="/projects"
            className="transition-colors hover:text-purple-500"
          >
            <span className="text-lg md:text-2xl">
              Ver mais <ChevronRight className="inline-block" />
            </span>
          </Link>
        </div>

        <div className="mt-16 space-y-10">
          {featuredProjects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </section>

      <section className="mt-48">
        <h2 className="text-4xl font-medium text-purple-500 md:text-6xl">
          Sobre mim
        </h2>
        <div className="relative mt-16 flex flex-col gap-11 md:flex-row">
          <Image
            src={"/me.jpg"}
            width={"537"}
            height={"579"}
            alt=""
            className="max-h-[579px] w-full rounded-md object-cover"
          />
          <p className="text-2xl leading-relaxed">
            Olá, me chamo Gabriel. Tenho {age} anos e estou cursando minha
            graduação em Ciência da Computação. Sou apaixonado por tecnologia e
            estou sempre buscando aprender novas coisas da minha área.
            Atualmente, sou um desenvolvedor fullstack, utilizando ReactJS e
            NodeJS com TypeScript. Além disso, tenho muito interesse na área de
            UX/UI criando interfaces intuitivas e agradáveis para os usuários.
          </p>
        </div>
      </section>
    </main>
  );
}
