"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import {
  MainContainer,
  HeroSection,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  HeroScrollDown,
  Section,
  Container,
  FlexTwoCol,
  FlexCol,
  ImageWrapper,
  ImageBackdrop,
  Badge,
  SectionTitle,
  SectionTitleCenter,
  Text,
  Quote,
  SectionSubtitle,
  Grid3Col,
  ServiceCard,
  ServiceIconWrapper,
  ServiceTitle,
  CategoryLink,
  CategoryGradient,
  CategoryContent,
  CategoryTitle,
  CategoryUnderline,
  ContactSection,
  Grid2Col,
  MapWrapper,
  FormWrapper,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton
} from "./page.styles";

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

      <MainContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroBackground>
            <Image
              src="/img/big-banner/1.webp"
              alt="Forester Revestimientos"
              fill
              priority
            />
          </HeroBackground>
          <HeroContent>
            <HeroTitle>
              Forester <span>Revestimientos</span>
            </HeroTitle>
            <HeroSubtitle>
              Transformando espacios con elegancia y calidad en cada detalle.
            </HeroSubtitle>
            <HeroButton href="#productos">
              Ver Productos
            </HeroButton>
          </HeroContent>

          <HeroScrollDown>
            <Link href="#nosotros">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </Link>
          </HeroScrollDown>
        </HeroSection>

        {/* Historia Section */}
        <Section id="nosotros">
          <Container>
            <FlexTwoCol>
              <FlexCol style={{ position: 'relative' }}>
                <ImageBackdrop />
                <ImageWrapper>
                  <Image
                    src="/img/historia.webp"
                    alt="Nuestra historia"
                    fill
                  />
                </ImageWrapper>
              </FlexCol>
              <FlexCol>
                <SectionTitle>Nuestra Historia</SectionTitle>
                <Text>
                  Forester Revestimientos es una empresa maderera familiar con un legado de cuatro décadas de experiencia y compromiso con la excelencia.
                  Nuestros pisos macizos se destacan por su durabilidad y belleza, todos ellos son de origen Paraguayos y Brasileros.
                </Text>
                <Text>
                  En Forester revestimientos sabemos que cada cliente es único y tiene necesidades diversas, por eso ofrecemos también pisos melaminicos y vinílicos de pvc con tecnología europea de vanguardia, es la combinación de belleza natural y tecnología innovadora.
                </Text>
                <Quote>
                  "Nuestra Misión es hacer que su experiencia sea inolvidable y que su inversión tanto en los pisos como en el revestimiento sea una inversión en belleza, calidad y durabilidad."
                </Quote>
              </FlexCol>
            </FlexTwoCol>
          </Container>
        </Section>

        {/* Servicios Section */}
        <Section id="servicios" $bg="var(--bg-light)">
          <Container>
            <SectionTitleCenter>Servicios</SectionTitleCenter>
            <SectionSubtitle>
              Nos caracteriza la experiencia, el buen trato y cercanía con el cliente. Sabemos de lo que vendemos y te ayudamos a encontrar paso a paso lo que estas necesitando.
            </SectionSubtitle>

            <Grid3Col>
              {[
                { title: "Asesoramiento Personalizado", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { title: "Amplio catálogo de productos", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                { title: "Guía de colocación", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" }
              ].map((service, idx) => (
                <ServiceCard key={idx}>
                  <ServiceIconWrapper>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </ServiceIconWrapper>
                  <ServiceTitle>{service.title}</ServiceTitle>
                </ServiceCard>
              ))}
            </Grid3Col>
          </Container>
        </Section>

        {/* Productos / Categorías Section */}
        <Section id="productos">
          <Container>
            <SectionTitleCenter>Nuestros Productos</SectionTitleCenter>
            <SectionSubtitle>
              Contamos con un amplio catálogo de productos de altísima calidad. Conocemos cada uno de ellos para poder asesorarte al detalle de acuerdo a tu necesidad.
            </SectionSubtitle>

            <Grid3Col style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {categories.map((cat) => (
                <CategoryLink href={`/productos/${cat.id}`} key={cat.id}>
                  <Image
                    src={`/img/products/home-gallery/${cat.img}`}
                    alt={cat.title}
                    fill
                  />
                  <CategoryGradient />
                  <CategoryContent>
                    <CategoryTitle>{cat.title}</CategoryTitle>
                    <CategoryUnderline />
                  </CategoryContent>
                </CategoryLink>
              ))}
            </Grid3Col>
          </Container>
        </Section>

        {/* Contacto Section */}
        <ContactSection id="contacto">
          <Container>
            <SectionTitleCenter>Contacto</SectionTitleCenter>
            <SectionSubtitle>
              Brindamos asesoramiento personalizado para cada necesidad. Ante cualquier consulta, no dudes en comunicarte con nosotros.
            </SectionSubtitle>

            <Grid2Col>
              {/* Mapa */}
              <MapWrapper>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8634864495743!2d-58.46827792401226!3d-34.607613357704395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9697a20820d%3A0x5ae2274873b4b16a!2sForester%20Revestimientos!5e0!3m2!1ses-419!2sar!4v1729466629144!5m2!1ses-419!2sar"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MapWrapper>

              {/* Formulario */}
              <FormWrapper>
                <h3>Envíanos un mensaje</h3>
                <Form action="#">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <FormGroup>
                      <Label>Nombre (*)</Label>
                      <Input type="text" required />
                    </FormGroup>
                    <FormGroup>
                      <Label>Teléfono (*)</Label>
                      <Input type="tel" required />
                    </FormGroup>
                  </div>
                  <FormGroup>
                    <Label>Email (*)</Label>
                    <Input type="email" required />
                  </FormGroup>
                  <FormGroup>
                    <Label>Mensaje (*)</Label>
                    <Textarea rows={4} required />
                  </FormGroup>
                  <SubmitButton type="submit">
                    Enviar Mensaje
                  </SubmitButton>
                </Form>
              </FormWrapper>
            </Grid2Col>
          </Container>
        </ContactSection>
      </MainContainer>

      <Footer />
    </>
  );
}
