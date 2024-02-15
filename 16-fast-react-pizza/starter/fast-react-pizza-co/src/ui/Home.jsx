import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="grid h-full grid-rows-[0.5fr_1fr] px-2">
      <h1 className="flex flex-col items-center justify-end text-center text-lg font-semibold sm:text-3xl">
        <span>The best pizza.</span>

        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
