import emailjs from '@emailjs/browser'
import { useState } from 'react'
import sajai from '../assets/sajaim.png'

const socials = [
  { name: 'LinkedIn',  icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/sajaim', hover: 'hover:bg-blue-600' },
  { name: 'GitHub',    icon: 'fa-brands fa-github',       href: 'https://github.com/Sajai-Pixel',       hover: 'hover:bg-gray-900' },
  { name: 'Instagram', icon: 'fa-brands fa-instagram',    href: 'https://www.instagram.com/sajai_ft/',    hover: 'hover:bg-pink-600' },
  { name: 'WhatsApp',  icon: 'fa-brands fa-whatsapp',     href: 'https://wa.me/917012741974',             hover: 'hover:bg-green-500' },
  { name: 'Email',     icon: 'fa-solid fa-envelope',      href: 'mailto:sajai.jun29@gmail.com',                  hover: 'hover:bg-brand-green' },
]

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
        setTimeout(() => setShowPopup(false), 3000)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const inputClasses =
    'w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg border border-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 outline-none transition'

  return (
    <section id="contact" className="section-padding bg-green-50 dark:bg-brand-dark scroll-reveal visible">
      <div className="container mx-auto px-6">

        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold dark:text-white">Get In Touch</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg">

          {/* LEFT — image fills the form's height, social links overlaid */}
          <div className="relative rounded-xl overflow-hidden min-h-[340px] md:min-h-0 order-2 md:order-1">
            <img
              src={sajai}
              alt="Sajai"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* social overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-5">
              <p className="text-white/90 text-sm font-medium mb-3">Let's connect</p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white ${s.hover} hover:scale-110 transition-all duration-200`}
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <form onSubmit={sendEmail} className="space-y-6 order-1 md:order-2">

            {/* hidden time field */}
            <input type="hidden" name="time" />

            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" className={inputClasses} placeholder="Your Name" required />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" className={inputClasses} placeholder="Your Email" required />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input type="tel" name="phone" id="phone" className={inputClasses} placeholder="Your Phone Number" pattern="[0-9+\s()-]{7,15}" required />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows="5" className={inputClasses} placeholder="Your Message" required />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-sm w-full text-center animate-scale-in">

            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
              <i className="fa-solid fa-check text-2xl text-brand-green" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Thank You!</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Your message has been sent successfully.</p>

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