import { Charities } from "./Charities";

export const Home = () => {
  return (
    <>
      <section className="bg-bg flex items-center justify-center bg-red-100 bg-cover bg-fixed bg-center bg-no-repeat before:h-[40vh]">
        <p className="text-center text-4xl font-bold opacity-60">
          Changing The World Through Kindness
        </p>
      </section>
      <Charities />
    </>
  );
};
