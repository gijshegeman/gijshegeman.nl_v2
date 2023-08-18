export default function ContactForm() {
    return (<>
        <form action="">
            <div className="
                flex flex-col gap-5
                tracking-wider
                text-sm
            ">

                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-2 justify-between">
                        <input
                            type='text'
                            id="firstName"
                            name="firstName"
                            placeholder="First name"
                            className="grow tracking-wider
                                rounded
                                py-1 px-2
                            "
                        />
                        <input
                            type='text'
                            id="lastName"
                            name="lastName"
                            placeholder="Last name"
                            className="grow tracking-wider
                                rounded
                                py-1 px-2
                            "
                        />
                    </div>
                    <div className="flex gap-2 justify-between items-baseline">
                        <label
                            htmlFor="email"
                            className="flex-none tracking-wider
                                text-stone-400
                                rounded
                                py-1 px-2
                            "
                        >
                            E-mail:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email-domain.com"
                            className="grow tracking-wider
                                rounded
                                py-1 px-2
                            "
                        />
                    </div>
                    <div className="flex justify-between">
                        <input
                            type="tel"
                            id="tel"
                            name="tel"
                            placeholder="+31 6 .."
                            className="grow tracking-wider
                                rounded
                                py-1 px-2
                            "
                        />
                    </div>
                </div>

                <div className="flex justify-between">
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="grow tracking-wider
                            rounded
                            py-1 px-2
                        "
                    />
                </div>

                <div className="flex justify-between">
                    <input
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Hey Gijs, ..."
                        className="grow tracking-wider 
                            rounded
                            py-1 px-2
                        "
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        type='submit'
                        className="
                            tracking-wider
                            bg-stone-300
                            hover:bg-stone-400
                            text-stone-600
                            hover:text-stone-200
                            w-full
                            rounded
                            py-1 px-2
                            transition-all duration-300
                        "
                    >
                        Send
                    </button>
                </div>
            </div>
        </form>

    </>
    )
}