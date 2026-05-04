import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const categories = [
  { id: "madera-maciza", title: "Madera Maciza", img: "madera-maciza.webp" },
  { id: "pisos-melaminicos", title: "Pisos Melamínicos", img: "pisos-melaminicos.webp" },
  { id: "pisos-vinilicos", title: "Pisos Vinílicos", img: "pisos-vinilicos.webp" },
  { id: "revestimientos-interior", title: "Revestimientos Interior", img: "revestimientos-interior.webp" },
  { id: "revestimientos-exterior", title: "Revestimientos Exterior", img: "revestimientos-exterior.webp" },
  { id: "deck", title: "Deck", img: "deck.webp" },
  { id: "zocalos", title: "Zócalos", img: "zocalos.webp" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/big-banner/1.webp"
              alt="Forester Revestimientos"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up font-work-sans">
              Forester <span className="text-amber-500">Revestimientos</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-10 font-light">
              Transformando espacios con elegancia y calidad en cada detalle.
            </p>
            <Link
              href="#productos"
              className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all hover:scale-105 shadow-lg shadow-amber-500/30 inline-block"
            >
              Ver Productos
            </Link>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#nosotros" className="text-white opacity-70 hover:opacity-100 hover:text-amber-500 transition-all">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </Link>
          </div>
        </section>

        {/* Historia Section */}
        <section id="nosotros" className="py-24 bg-white scroll-mt-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-amber-500/20 rounded-3xl transform -rotate-3"></div>
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/img/historia.webp"
                    alt="Nuestra historia"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-block bg-amber-100 text-amber-600 px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-2">Sobre Nosotros</div>
                <h2 className="text-4xl font-bold text-gray-900 font-work-sans">Nuestra Historia</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Forester Revestimientos es una empresa maderera familiar con un legado de cuatro décadas de experiencia y compromiso con la excelencia. 
                  Nuestros pisos macizos se destacan por su durabilidad y belleza, todos ellos son de origen Paraguayos y Brasileros.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  En Forester revestimientos sabemos que cada cliente es único y tiene necesidades diversas, por eso ofrecemos también pisos melaminicos y vinílicos de pvc con tecnología europea de vanguardia, es la combinación de belleza natural y tecnología innovadora.
                </p>
                <p className="text-lg font-medium text-gray-800 border-l-4 border-amber-500 pl-6 italic my-8">
                  "Nuestra Misión es hacer que su experiencia sea inolvidable y que su inversión tanto en los pisos como en el revestimiento sea una inversión en belleza, calidad y durabilidad."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-24 bg-gray-50 relative scroll-mt-32">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-work-sans">Servicios</h2>
              <p className="text-lg text-gray-600">
                Nos caracteriza la experiencia, el buen trato y cercanía con el cliente. Sabemos de lo que vendemos y te ayudamos a encontrar paso a paso lo que estas necesitando.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Asesoramiento Personalizado", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { title: "Amplio catálogo de productos", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                { title: "Guía de colocación", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group">
                  <div className="w-20 h-20 mx-auto bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors transform group-hover:-translate-y-2">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Productos / Categorías Section */}
        <section id="productos" className="py-24 bg-white scroll-mt-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-work-sans">Nuestros Productos</h2>
              <p className="text-lg text-gray-600">
                Contamos con un amplio catálogo de productos de altísima calidad. Conocemos cada uno de ellos para poder asesorarte al detalle de acuerdo a tu necesidad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <Link href={`/productos/${cat.id}`} key={cat.id} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg block">
                  <Image
                    src={`/img/products/home-gallery/${cat.img}`}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                    <div className="w-12 h-1 bg-amber-500 rounded transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-24 bg-neutral-900 text-white relative scroll-mt-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6 font-work-sans">Contacto</h2>
              <p className="text-lg text-gray-400">
                Brindamos asesoramiento personalizado para cada necesidad. Ante cualquier consulta, no dudes en comunicarte con nosotros.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Mapa */}
              <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8634864495743!2d-58.46827792401226!3d-34.607613357704395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9697a20820d%3A0x5ae2274873b4b16a!2sForester%20Revestimientos!5e0!3m2!1ses-419!2sar!4v1729466629144!5m2!1ses-419!2sar" 
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Formulario */}
              <div className="bg-white text-gray-800 p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Envíanos un mensaje</h3>
                <form action="#" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre (*)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono (*)</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email (*)</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje (*)</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30 text-lg">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
