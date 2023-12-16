"use client";

import Carousel from "@/components/carousel";
import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const supabase = createClientComponentClient<Database>();
  const { role } = useParams();

  const [project, setProject] = useState<
    Database["public"]["Tables"]["projects"]["Row"] | null
  >(null);
  const [projects, setProjects] = useState<
    Database["public"]["Tables"]["projects"]["Row"][]
  >([]);

  useEffect(() => {
    if (!role) return;

    supabase
      .from("projects")
      .select("*")
      .eq("role", role)
      .then(({ data }) => {
        if (!data) return;

        const mapped = data.map((project) => {
          const imageUrls = project.images.map((image) => {
            return supabase.storage.from("portfolio").getPublicUrl(image).data
              .publicUrl;
          });

          return {
            ...project,
            images: imageUrls,
          };
        });

        setProjects(mapped);
      });
  }, [supabase, role]);

  return (
    <div className="w-full">
      <div className="mt-20">
        <Image
          className="hidden md:block absolute left-1/4 -top-10 w-[800px] -z-10 select-none"
          src="/img/blue-blur.svg"
          alt="blur"
          width={100}
          height={100}
          placeholder="empty"
          draggable={false}
        />
        <h1 className="text-primary font-extrabold text-4xl uppercase text-center">
          View my past works
        </h1>
        <h2 className="text-gray-400 text-center">
          Get inspired and don&apos;t believe just to my words, see what I
          already did for other clients!
        </h2>
      </div>

      <div className="flex flex-row gap-2 flex-wrap">
        {projects.map((project) => (
          <div key={"project-" + project.id} className="mt-6">
            <button key={project.id} onClick={() => setProject(project)}>
              <Image
                src={project.images[0] || "/img/placeholder.png"}
                width={300}
                height={200}
                alt={project.name}
                className="rounded-lg w-[300px] h-[200px] object-cover"
                draggable={false}
              />
              <h1 className="text-gray-400 mt-2">{project.name}</h1>
            </button>
          </div>
        ))}
      </div>

      {project !== null && (
        <Carousel project={project} close={() => setProject(null)} />
      )}

      {projects.length === 0 && (
        <div className="flex justify-center items-center h-[50vh]">
          <h1 className="text-gray-400">There are no projects for this role</h1>
        </div>
      )}
    </div>
  );
}
