import Moods from "@/components/Moods";

export default function Home() {
  return (
    <>
      <div className="w-[90%] m-auto max-ms:w-full">
        <h1 className="text-center mt-8 text-4xl max-sm:text-2xl font-bold ">
          Discover Movies Based on Your Current Mood
        </h1>
        <Moods />
      </div>
    </>
  );
}
