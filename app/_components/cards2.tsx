import { FollowerPointerCard } from "@/components/ui/following-pointer";


export function FollowingPointerDemo2() {
  return (
    <div className="mx-auto w-80 hover:scale-105 transition-all duration-200">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl bg-[#1d1c20] border border-white/[0.08] transition duration-200 hover:shadow-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
            <img
              src={blogContent.image}
              alt="thumbnail"
              className="h-full transform object-cover transition duration-200 scale-109  border-2 p-2"
            />
          </div>
          <div className="p-4">
            <h2 className="my-4 text-xl font-bold text-zinc-300">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-xm font-normal text-zinc-500">
              {blogContent.description}
            </h2>
            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                Listen Now
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Get Pronunciation",
  date: "28th March, 2023",
  title: "Get Real-time Pronunciation",
  description:
    "Struggle with difficult pronunciations? Let our AI guide you. Hear every hymn pronounced clearly with accurate tones and intonations, so you can chant with confidence and perfection — just like a teacher by your side.",
  image: "./pronounciation.png",
  authorAvatar: "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
