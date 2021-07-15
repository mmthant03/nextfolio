import Styles from './contactform.module.css'
import { useRef, useState } from 'react'
import { useForm } from '@formspree/react'

const ContactForm = () => {
    const defaultBudget = 500000
    const minBudget = 300000
    const maxBudget = 1000000

    const [isInquiry, setInquiry] = useState(false)
    const [selectedBudget, setSelectedBudget] = useState(defaultBudget)
    const inquiryDetails = useRef(null)
    const { form_control, form_input, input_range } = Styles
    const formSpreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    const [state, handleSubmit] = useForm(formSpreeId)

    return (
        <div>
            <h5
                className="font-semibold text-sm uppercase mt-12 mb-3"
                id="contact"
            >
                Contact
            </h5>

            <form onSubmit={handleSubmit} className="flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="w-full lg:w-1/3 py-px lg:px-px">
                        <input
                            aria-label="Name"
                            autoComplete="name"
                            className={form_input}
                            name="name"
                            placeholder="NAME"
                            required
                            type="text"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 py-px lg:px-px">
                        <input
                            aria-label="E-mail"
                            autoComplete="email"
                            className={form_input}
                            name="email"
                            placeholder="EMAIL ADDRESS"
                            required
                            type="email"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 py-px lg:px-px">
                        <div className={`${form_control} bg-white`}>
                            <label className="cursor-pointer select-none">
                                <input
                                    className="hidden"
                                    name="inquiry"
                                    onChange={() => setInquiry(!isInquiry)}
                                    type="checkbox"
                                />
                                <span className="relative inline-block border-2 align-middle mr-2 -mt-1 border-black border-solid w-5 h-5">
                                    {isInquiry && (
                                        <span className="absolute inline-block bg-green-500 inset-0 m-1"></span>
                                    )}
                                </span>
                                <span className="opacity-50 uppercase">Inquiry</span>
                            </label>
                        </div>
                    </div>
                </div>


                <div
                    className="w-full overflow-hidden transition-all duration-300 ease-linear"
                    style={{
                        height: isInquiry ? inquiryDetails.current?.clientHeight : 0,
                        opacity: isInquiry ? 100 : 0.3,
                    }}
                >
                    <div ref={inquiryDetails}>
                        <div className="flex flex-wrap w-full py-px lg:p-px">
                            <div className="w-1/4 lg:w-1/5 bg-white">
                                <label
                                    htmlFor="budget"
                                    className="block opacity-50 px-4 py-3 h-full text-sm uppercase font-semibold leading-tight"
                                >
                                    Budget
                                </label>
                            </div>
                            <div className="w-3/4 lg:w-4/5 p-4 bg-white">
                                <input
                                    className={input_range}
                                    defaultValue={defaultBudget}
                                    max={maxBudget}
                                    min={minBudget}
                                    name="budget"
                                    onChange={e => setSelectedBudget(e.currentTarget.value)}
                                    step="10000"
                                    type="range"
                                />
                                <div className="font-semibold leading-none opacity-50">
                                    {selectedBudget} Kyats
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap w-full py-px lg:p-px">
                            <input
                                aria-label="Project Type"
                                autoComplete="new-password"
                                className={form_input}
                                name="project_type"
                                placeholder="PROJECT TYPE (E.G. WEBSITE, MOBILE APP)"
                                type="text"
                            />
                        </div>

                        <div className="w-full py-px lg:p-px">
                            <input
                                aria-label="Phone number"
                                autoComplete="tel"
                                className={form_input}
                                name="phone"
                                placeholder="PHONE NUMBER"
                                type="tel"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full text-right py-px lg:p-px">
                    <textarea
                        aria-label="Message"
                        className={`block ${form_input} bg-white resize-none border-b-0 pb-4`}
                        name="message"
                        placeholder="MESSAGE"
                        required
                        rows="6"
                    ></textarea>
                    <div className="bg-white">
                        <input
                            className="inline-block font-semibold px-6 py-2 leading-tight cursor-pointer outline-none bg-black text-white uppercase mr-4 my-4 transition-opacity duration-150 hover:opacity-75"
                            type="submit"
                            value="Send"
                        />
                       
                    </div>

                </div>
                <div className="inline-block font-normal text-black my-4">
                    {state.succeeded && state.submitting &&
                        (<span>Your request is successfully sent!</span>)
                    }
                    {state.errors.message && (
                        <span>Oops! your request cannot be proceeded at this moment. <br/>Please reach out to me at mmthant0311@gmail.com.</span>
                    )}
                </div>



            </form>
        </div>
    );
}

export default ContactForm;