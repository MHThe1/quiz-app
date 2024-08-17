export default function ContentBox({ children }) {
    return (
        <div className="px-10 text-center w-5/6 sm:w-3/4 lg:w-[45rem] xl:w-[50rem] 2xl:w-[50rem] bg-sky-200 dark:bg-purple-700
                 text-stone-950 dark:text-stone-50 font-quicksand font-bold p-4 m-2 mx-auto rounded-lg">
                    {children}
        </div>
    )
}