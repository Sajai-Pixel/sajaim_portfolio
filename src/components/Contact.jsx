import emailjs from '@emailjs/browser'
import { useState } from 'react'

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        // inject time explicitly
        e.target.time.value = new Date().toLocaleString()

        emailjs.sendForm(
            'service_ntqinze',
            'template_a3khfhk',
            e.target,
            'hz-DO1b4yPY2vOOvY'
        )
            .then(() => {
                setShowPopup(true)
                e.target.reset()

                // auto close after 3s (optional)
                setTimeout(() => setShowPopup(false), 3000)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <section id="contact" className="section-padding bg-green-50 dark:bg-brand-dark scroll-reveal visible">
            <div className="container mx-auto px-6">

                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold dark:text-white">Get In Touch</h2>
                    <p className="text-gray-500 mt-4 mb-12">
                        Have a project in mind or just want to say hi? Feel free to reach out.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg">
                    <form onSubmit={sendEmail} className="space-y-6">

                        {/* hidden time field */}
                        <input type="hidden" name="time" />

                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="sr-only">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg"
                                placeholder="Your Phone Number"
                                pattern="[0-9+\s()-]{7,15}"
                                required
                            />
                        </div>


                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg"
                                placeholder="Your Message"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand-green text-white font-bold py-4 px-6 rounded-lg hover:bg-green-700 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center animate-scale-in">

                        <div className="text-4xl mb-4">✅</div>

                        <h3 className="text-2xl font-bold text-gray-800">
                            Thank You!
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Your message has been sent successfully.
                        </p>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-6 bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}

        </section>
    )
}

export default Contact
