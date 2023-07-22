type SectionProps = {
  children: React.ReactNode;
  id: number;
  name: string;
  code: string;
};

export const Section = function Section({ children, id, name, code }: SectionProps) {
  return (
    <div id={code} className="flex flex-col gap-2 my-20 text-center items-center justify-center relative w-full">
      <h2 className="text-primary font-extrabold text-xl">- 0{id} -</h2>
      <h1 className="font-extrabold uppercase text-2xl">{name}</h1>
      <h2 className="text-primary font-extrabold text-xl mb-20">-</h2>
      {children}
    </div>
  );
};
