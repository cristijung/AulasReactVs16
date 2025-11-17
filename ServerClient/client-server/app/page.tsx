import ResponsiveImage from "./components/ResponsiveImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Componente ResponsiveImage em Ação
      </h1>

      {/* o contêiner pai controla a responsividade. 
        aqui, definimos que a imagem terá no máximo 640px de largura e será centralizada.
      */}
      <div className="w-full max-w-xl mx-auto rounded-xl shadow-2xl overflow-hidden border-4 border-white">
        <ResponsiveImage
          src="/gato.jpg"
          alt="Uma paisagem urbana ao pôr do sol, vibrante e moderna."
          width={1920} // MANTER: Necessário para calcular o aspectRatio
          height={1080} // MANTER: Necessário para calcular o aspectRatio
          className="ring-4 ring-indigo-500/50"
        />
      </div>

      <p className="mt-6 text-lg text-gray-600 text-center">
        A imagem acima é responsiva e mantém o aspect ratio 16:9 (1920x1080).
      </p>
    </main>
  );
}
