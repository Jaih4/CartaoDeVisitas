import Link from "next/link";

export default function CartaoDeVisitas() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        id="card"
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-72"
      >
        <img
          src="/images/Perfil.jpg"
          alt="Foto de perfil"
          className="w-[10vw] h-[10vw] rounded-full mb-4 object-cover"
        />
        <h1 className="text-xl font-bold mb-2">Cleiton Rasta</h1>
        <div className="job text-gray-600 mb-4">DJ</div>
        <div className="contact flex flex-col items-center space-y-2 text-blue-600">
          <a
            href="mailto:DJCleitonoficial@gmail.com"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://open.spotify.com/intl-pt/artist/2AuiT3YyD83ZtqK75mdBIz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Spotify
          </a>
          <a
            href="https://www.instagram.com/djcleitonrastaoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>

        {}
        <Link href="/habilidades" className="w-full">
          <button className="mt-6 w-full px-4 py-2 bg-blue-200 text-white rounded hover:bg-blue-500">
            Detalhes
          </button>
        </Link>
      </div>
    </div>
  );
}
