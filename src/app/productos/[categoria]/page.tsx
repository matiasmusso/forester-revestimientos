import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { productsData } from "@/data/products";

// Static params para generar las categorías durante la build (SSG)
export function generateStaticParams() {
  return Object.keys(productsData).map((categoria) => ({
    categoria,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const categoryData = productsData[categoria];
  if (!categoryData) {
    return { title: "Categoría no encontrada | Forester Revestimientos" };
  }
  return {
    title: `${categoryData.title} | Forester Revestimientos`,
    description: categoryData.description[0],
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const categoryData = productsData[categoria];

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <WhatsAppButton />

      <main className="pb-20">
        {/* Category Hero */}
        <section className="relative min-h-[60vh] lg:min-h-[50vh] flex items-center justify-center pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={`/img/products/home-gallery/${categoria}.webp`}
              alt={categoryData.title}
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-work-sans text-white drop-shadow-lg">
              {categoryData.title}
            </h1>
            <div className="space-y-4 text-base md:text-lg lg:text-xl text-gray-200 font-light drop-shadow-md">
              {categoryData.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="container mx-auto px-4 md:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {categoryData.items.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                categorySlug={categoria}
              />
            ))}
          </div>

          {categoryData.items.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl text-gray-500">Pronto agregaremos más productos a esta categoría.</h3>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
