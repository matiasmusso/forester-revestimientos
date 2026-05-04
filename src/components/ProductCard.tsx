"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductItem } from "@/data/products";

interface ProductCardProps {
  product: ProductItem;
  categorySlug: string;
}

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainImage = product.imagenes.length > 0 ? product.imagenes[0] : "";
  const imagePath = `/img/products/${categorySlug}/${mainImage}`;

  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100">
        <div
          className="relative h-64 w-full overflow-hidden bg-gray-100 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {mainImage ? (
            <Image
              src={imagePath}
              alt={product.nombre}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">Sin Imagen</div>
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              className="bg-amber-500 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none"
              title="Ver galería"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            </button>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-3 font-work-sans cursor-pointer hover:text-amber-500 transition-colors" onClick={() => setIsModalOpen(true)}>
            {product.nombre}
          </h3>

          <div className="text-gray-600 text-sm space-y-2 mb-4 flex-grow">
            {product.descripcion.slice(0, 2).map((desc, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: desc }} className="line-clamp-3"></p>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto w-full py-2.5 border border-amber-500 text-amber-600 font-medium rounded-lg hover:bg-amber-500 hover:text-white transition-colors cursor-pointer"
          >
            Ver Detalles
          </button>
        </div>
      </div>

      {/* Modal for Gallery and Full Description */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div
            className="bg-white rounded-2xl max-w-5xl w-full h-[85vh] md:h-[50vh] shadow-2xl relative overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-20 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-md transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden">
              <div className="bg-gray-100 p-4 md:p-6 flex flex-col items-center h-full overflow-y-auto">
                <div className="w-full flex flex-col items-center justify-center gap-6 min-h-full py-2">
                  {product.imagenes.map((img, idx) => (
                    <Image
                      key={idx}
                      src={`/img/products/${categorySlug}/${img}`}
                      alt={`${product.nombre} ${idx + 1}`}
                      width={800}
                      height={800}
                      className="max-w-full w-auto h-auto max-h-[70vh] md:max-h-[42vh] rounded-xl shadow-md"
                    />
                  ))}
                  {product.imagenes.length === 0 && (
                    <div className="w-full h-64 flex items-center justify-center text-gray-400 bg-white rounded-xl">Sin Imágenes</div>
                  )}
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="p-8 h-full overflow-y-auto flex flex-col relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-work-sans pr-8">{product.nombre}</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed flex-grow">
                  {product.descripcion.map((desc, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: desc }}></p>
                  ))}
                </div>

                <div className="mt-8 pt-4 pb-4 border-t border-gray-200/50 sticky bottom-0 bg-white/70 backdrop-blur-xl z-10 -mx-8 px-8">
                  <a
                    href={`https://api.whatsapp.com/send?phone=5491132886354&text=Hola!%20Quisiera%20informaci%C3%B3n%20sobre%20el%20producto%20${encodeURIComponent(product.nombre)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg text-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
