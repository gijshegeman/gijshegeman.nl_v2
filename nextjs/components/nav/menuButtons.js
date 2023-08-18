export default function MenuButtons({ setToggle, toggle }) {

    return (<>
        <div className="flex items-center gap-4">
            <div
                onClick={() => setToggle(!toggle)}
                className="
                flex flex-col gap-2 justify-center scale-[0.7]
            "
            >
                <div className={!toggle ? "h-[2px] w-[30px] bg-black rounded-full origin-top-right rotate-0 transition duration-300 translate-y-0" : "h-[2px] w-[30px] bg-black rounded-full origin-top-right -rotate-45 transition duration-300 -translate-y-[.4px]"}></div>
                <div className={!toggle ? "h-[2px] w-[30px] bg-black rounded-full rotate-0 transition duration-300 opacity-100" : "h-[2px] w-[30px] bg-black opacity-0 rounded-full transition duration-300"}></div>
                <div className={!toggle ? "h-[2px] w-[30px] bg-black rounded-full origin-bottom-right rotate-0 transition duration-300 translate-y-0" : "h-[2px] w-[30px] bg-black rounded-full origin-bottom-right rotate-45 transition duration-300 translate-y-[.4px]"}></div>
            </div>
        </div>
    </>)
}