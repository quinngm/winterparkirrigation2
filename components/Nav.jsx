

export default function Nav({ name }) {

    return (
        <div className=" w-full flex flex-row justify-between py-6 bg-gray-300 px-6">
            <button className=" p-3 bg-blue-400">Winter Park Irrigation</button>

            <nav className=" flex flex-row gap-4">
                <button className=" text-zinc-200 bg-gray-500 px-6 rounded-md">About Us</button>
                <button className=" text-zinc-200 bg-gray-500 px-6 rounded-md">Products & Services</button>
                <button className=" text-zinc-200 bg-gray-500 px-6 rounded-md">Schedule</button>
            </nav>
        </div>
    )
}