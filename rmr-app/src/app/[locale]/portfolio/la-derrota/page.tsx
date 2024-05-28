"use client";
import { useLocale } from "next-intl";
import ReactPlayer from "react-player";
import PortfolioContent from "../../components/portfolio_content";
import Image from "next/image";

export default function Libros() {
  const locale = useLocale();
  return (
    <PortfolioContent
      mainContent={
        <ReactPlayer
          url={
            "https://player.vimeo.com/video/906343213?badge=0&amp;player_id=0&amp;app_id=58479"
          }
          width="100%"
          height={600}
          playing={true}
          playIcon={
            <Image
              src="/mdi_play-outline.svg"
              alt="video play"
              width={84}
              height={84}
              quality={100}
            />
          }
          controls
          light="/main-derrota.png"
        />
      }
      description={
        locale === "es"
          ? "< LA DERROTA >, 2023"
          : "< LA DERROTA (THE DEFEAT) >, 2023"
      }
      sectionContet={
        <>
          {locale === "en" ? (
            <p className="flex flex-col gap-4">
              <span>
                LA DERROTA is a short film about the fear of disappearing, of
                impersonation, and of oneself.
              </span>
              <span>
                Written, directed and produced by me, costumes made by me,
                makeup and art direction as well.
              </span>
              <span>
                Starring Lucía Llanos Subijana and Marta Lara Martínez, with key
                assistance from Carmen La Petra. Special thanks to Jara and
                Pablo. 
              </span>
            </p>
          ) : (
            <p className="flex flex-col gap-4">
              <span>
                LA DERROTA es un corto sobre el miedo a desaparecer, a la
                suplantación de identidad, y a una misma.
              </span>
              <span>
                Escrito, dirigido y producido por mí. Al igual que el diseño de
                vestuario y gráfico, el maquillaje y la dirección artística.
              </span>
              <span>
                Protagonizada por Lucía Llanos Subijana y Marta Lara Martínez,
                con la colaboración esencial de Carmen La Petra. Agradecimientos
                especiales a Jara y Pablo.
              </span>
            </p>
          )}
        </>
      }
      footerContent={
        <div className="flex justify-center">
          <div className="flex flex-col gap-2 p-4">
            <Image
              src="/laderrota.gif"
              width={600}
              height={400}
              quality={100}
              priority={true}
              alt="la derrota gif"
              className="mx-auto"
              unoptimized
            />
            <p>
              {locale === "en"
                ? "Limited edition of 20 fanzines."
                : "Edición limitada de 20 fanzines."}
            </p>
          </div>
        </div>
      }
    />
  );
}
