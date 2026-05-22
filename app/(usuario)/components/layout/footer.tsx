export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-3 md:px-5">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Suscríbete a Rosatel</h3>
            <p className="text-sm text-gray-300 mb-4">
              para conocer nuestros lanzamientos, descuentos y promociones…
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Ingresar email"
                className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition text-sm">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-3 md:px-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1 - Logo & Social */}
            <div>
              <h4 className="text-lg font-bold mb-4">ROSATEL</h4>
              <p className="text-sm text-gray-400 mb-4">
                Los mejores arreglos florales y regalos para todas tus ocasiones especiales.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/rosatelperu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/rosatel.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.205.726c-.7.405-1.295.957-1.738 1.653-.39.75-.618 1.61-.682 2.89C1.447 8.357 1.455 8.764 1.455 12s.008 3.643.066 4.905c.061 1.28.29 2.14.690 2.89.445.695 1.04 1.248 1.74 1.653.6.393 1.47.594 2.75.654 1.278.061 1.685.068 4.945.068s3.667-.008 4.947-.068c1.28-.06 2.15-.26 2.75-.654.7-.405 1.295-.958 1.738-1.653.39-.75.618-1.61.682-2.89.061-1.262.066-1.668.066-4.905s-.008-3.643-.066-4.905c-.061-1.28-.29-2.14-.69-2.89-.445-.695-1.04-1.248-1.74-1.653-.6-.393-1.47-.593-2.75-.653-1.278-.062-1.684-.069-4.945-.069zm0 2.163c3.204 0 3.584.008 4.85.063 1.17.053 1.805.248 2.227.413.56.217 1.001.476 1.44.915.44.44.698.88.915 1.44.165.422.36 1.057.413 2.227.055 1.266.063 1.645.063 4.85 0 3.204-.008 3.584-.063 4.85-.053 1.17-.248 1.805-.413 2.227-.217.56-.476 1.001-.915 1.44-.44.44-.88.698-1.44.915-.422.165-1.057.36-2.227.413-1.266.055-1.645.063-4.85.063-3.204 0-3.584-.008-4.85-.063-1.17-.053-1.805-.248-2.227-.413-.56-.217-1.001-.476-1.44-.915-.44-.44-.698-.88-.915-1.44-.165-.422-.36-1.057-.413-2.227-.055-1.266-.063-1.645-.063-4.85 0-3.204.008-3.584.063-4.85.053-1.17.248-1.805.413-2.227.217-.56.476-1.001.915-1.44.44-.44.88-.698 1.44-.915.422-.165 1.057-.36 2.227-.413 1.266-.055 1.645-.063 4.85-.063z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@rosatelperu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.321 5.562a5.122 5.122 0 0 1-2.8 2.872A8.974 8.974 0 0 1 12.25 9.3c-3.183 0-5.75-2.567-5.75-5.75S9.067-2.2 12.25-2.2s5.75 2.567 5.75 5.75-.032.807-.321 1.562zm-1.44 12.938c-1.44-1.44-3.752-2.333-6.25-2.333s-4.81.893-6.25 2.333m8.69-10.605A5.62 5.62 0 0 1 18 3.55V.55h1.75v12.5a3.75 3.75 0 1 1-3.75-3.75v1.75a5.5 5.5 0 1 0 5.5 5.5V5.3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Cuenta */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Mi Cuenta</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Información Personal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Mis Pedidos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Direcciones
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Políticas */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Políticas</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Atención 24h
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Políticas de Entrega
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sobre Nosotros
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Información */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Nuestras Tiendas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Recojo en Tienda
                  </a>
                </li>
                <li>
                  <a href="tel:+51123456789" className="hover:text-white transition">
                    (01) 1234-5678
                  </a>
                </li>
                <li>
                  <a href="mailto:info@rosatel.pe" className="hover:text-white transition">
                    info@rosatel.pe
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 - Métodos de Pago */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Métodos de Pago</h4>
              <div className="space-y-2 text-xs text-gray-400">
                <p>Aceptamos tarjetas de crédito, débito y billeteras digitales.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            {/* Warnings */}
            <div className="mb-6 text-xs text-gray-400 space-y-2">
              <p>Prohibida la venta de bebidas alcohólicas a menores de edad.</p>
              <p>Tomar bebidas alcohólicas en exceso es dañino.</p>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              ROSATEL - Todos los Derechos Reservados © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
