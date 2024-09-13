export default function Footer() {
  return (
    <footer className="flex h-14 items-center justify-between gap-4 bg-gray-200 px-5 py-4 md:justify-center md:gap-4">
      <a
        href="https://legal.rdstation.com/pt/privacy-policy/"
        target="_blank"
        className="font-primary text-[14px] font-bold leading-[22px] text-[#636E7C] underline"
      >
        Política de Privacidade
      </a>

      <p className="text-[#636E7C] body-sm">© 2023 Resultados Digitais</p>
    </footer>
  );
}
