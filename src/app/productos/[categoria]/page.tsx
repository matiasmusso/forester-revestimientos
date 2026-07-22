import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import ProductCard from "@/components/ProductCard/ProductCard";
import { productsData } from "@/data/products";
import {
  PageContainer,
  Main,
  CategoryHero,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroDescriptionContainer,
  Container,
  ProductsGrid,
  EmptyState,
  BackLinkWrapper,
  BackLink
} from "./page.styles";

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
    <PageContainer>
      <Navbar />
      <WhatsAppButton />

      <Main>
        {/* Category Hero */}
        <CategoryHero>
          <HeroBackground>
            <Image
              src={`/img/products/home-gallery/${categoria}.webp`}
              alt={categoryData.title}
              fill
              priority
            />
          </HeroBackground>
          <HeroContent>
            <HeroTitle>
              {categoryData.title}
            </HeroTitle>
            <HeroDescriptionContainer>
              {categoryData.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </HeroDescriptionContainer>
          </HeroContent>
        </CategoryHero>

        {/* Products Grid */}
        <Container>
          <BackLinkWrapper>
            <BackLink href="/#productos">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Volver a Productos
            </BackLink>
          </BackLinkWrapper>

          <ProductsGrid>
            {categoryData.items.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                categorySlug={categoria}
              />
            ))}
          </ProductsGrid>

          {categoryData.items.length === 0 && (
            <EmptyState>
              <h3>Pronto agregaremos más productos a esta categoría.</h3>
            </EmptyState>
          )}
        </Container>
      </Main>

      <Footer />
    </PageContainer>
  );
}
