import Link from "next/link";

export default function NotFound() {
  return (
    <div className="dark:bg-dark dark:text-white flex flex-col items-center justify-center pt-[10rem] tablet:pt-[25rem]">
      <p className="text-3xl tablet:text-5xl desktop:text-7xl text-rose-500 animate-pulse">
        {"URL Not Found :("}
      </p>
      <Link
        className="w-[15rem] h-[3rem] text-xlg flex justify-center items-center mb-10 mt-10 dark:bg-sky-950 bg-blue-100 hover:bg-blue-200 dark:hover:bg-sky-800 border cursor-pointer rounded-2xl"
        href="/"
      >
        Go Back to Home Page
      </Link>
    </div>
  );
}
