<script>
    import "../app.css"; // Importa o estilo global
</script>

<div class="font-poppins bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <div class="bg-cover h-screen px-10 py-8 min-w-screen bg-[url('/bg-hero.webp')]">
        <nav class="flex items-center">
            <img class="rounded-full w-[150px] cursor-pointer" src="/logo-flyby.png" alt="Logo" />
            <ul class="flex-1 text-center">
                <li class="list-none inline-block px-5"><a href="#hero" class="no-underline text-white px-2">Home</a></li>
                <li class="list-none inline-block px-5"><a href="#destinations" class="no-underline text-white px-2">Destinos</a></li>
                <li class="list-none inline-block px-5"><a href="#about" class="no-underline text-white px-2">Sobre</a></li>
                <li class="list-none inline-block px-5"><a href="#services" class="no-underline text-white px-2">Serviços</a></li>
                <li class="list-none inline-block px-5"><a href="#contact" class="no-underline text-white px-2">Contato</a></li>
            </ul>
        </nav>

        <div class="text-center text-white space-y-6 mt-20 pt-8" id="hero">
            <h1 class="text-4xl md:text-6xl font-bold">FlyBy</h1>
            <p class="text-lg md:text-xl">Descubra o mundo com conforto, segurança e as melhores ofertas!</p>
            <div class="mt-10">
                <a href="/passengers" class="px-6 py-3 bg-white text-sky-700 rounded-full font-semibold hover:bg-slate-800 hover:text-white">
                    Gerenciar <i class="fa fa-plane ml-1"></i>
                </a>
            </div>
        </div>
    </div>

    <!-- About Section -->
    <section id="about" class="py-16 px-10 md:px-20">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-semibold mb-6">Quem Somos</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
                Fundada em 2015, a FlyBy nasceu com a missão de conectar pessoas aos seus sonhos, oferecendo experiências de viagens inesquecíveis, desde o momento da decolagem até o pouso.
            </p>
        </div>
    </section>

    <!-- Destinations Section -->
    <section id="destinations" class="bg-gray-100 py-16 px-10 md:px-20">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-semibold text-center mb-10">Destinos Populares</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <img src="/destino1.jpg" alt="Destino 1" class="w-full h-60 object-cover rounded-lg shadow-lg" />
                <img src="/destino2.jpg" alt="Destino 2" class="w-full h-60 object-cover rounded-lg shadow-lg" />
                <img src="/destino3.jpg" alt="Destino 3" class="w-full h-60 object-cover rounded-lg shadow-lg" />
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 px-10 md:px-20">
        <div class="max-w-4xl mx-auto text-justify">
            <h2 class="text-3xl md:text-4xl font-semibold mb-6">Nossos Serviços</h2>
            <div class="space-y-4 text-gray-700">
                <p>✈️ Passagens aéreas nacionais e internacionais</p>
                <p>🏨 Pacotes completos com hospedagem</p>
                <p>🚗 Locação de veículos</p>
                <p>🌍 Roteiros personalizados para suas férias</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-sky-700 text-white py-16 px-10 md:px-20">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-semibold mb-6">Fale Conosco</h2>
            <p class="mb-8 text-gray-300">
                Planeje sua viagem conosco! Envie uma mensagem e retornaremos em breve.
            </p>
            <form action="#" method="POST" class="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    placeholder="Sua Mensagem"
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    type="submit"
                    class="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-[#150026] transition hover:text-white"
                >
                    Enviar
                </button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-950 text-gray-300 py-6 text-center">
        <p>&copy; 2024 FlyBy. Todos os direitos reservados.</p>
    </footer>
</div>
