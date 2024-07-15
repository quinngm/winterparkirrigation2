

export default function Nav({ name }) {

    return (
        <div className=" w-full flex flex-row justify-between py-6 bg-gray-300 px-6">
            <button className=" p-3 bg-red-400">name</button>

            <nav className=" flex flex-row gap-4">
                <button className=" text-zinc-200 bg-gray-500 px-6 rounded-md">Hello</button>
                <button className=" text-zinc-200 bg-gray-500 px-6 rounded-md">Hello</button>
                <button className=" text-zinc-200 bg-gray-500 px-6 rounded-md">Hello</button>
            </nav>
        </div>
    )
}