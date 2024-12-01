<script>
    import "../../../app.css"; // Importa o estilo global
    import { createTicket } from "$lib/fetch";
    import { goto } from "$app/navigation";
    

    let departure = '';
    let destination = '';
    let airport = '';

    async function submitForm(){
        
        try {
            await createTicket(departure, destination, airport);
        } catch (error) {
            console.error('Erro ao criar o passageiro:', error);
        } finally {
            departure = "";
            destination = "";
            airport = "";
    
            goto("/tickets");
        }
        }

</script>

<div class="bg-gray-50 text-gray-800 min-h-screen">
    <!-- Navbar -->
    <div class="bg-sky-700 font-semibold text-2xl px-4 py-2">
        <header class="text-white py-4 text-start">
            <h2>Cadastro de Ticket</h2>
        </header>
    </div>

    <!-- Formulário de Cadastro -->
    <section class="flex items-center justify-center py-16 px-10 md:px-20">
        <div class="max-w-7xl mb-6 mx-auto bg-white shadow-md rounded-lg p-6">
            <h4 class="text-3xl text-slate-800 font-semibold text-center mb-6">Preencha os Dados do Ticket</h4>
            <form on:submit={submitForm}>
                <div class="mb-4">
                    <label for="local-partida" class="block text-slate-800">Local de Partida</label>
                    <input bind:value={departure} type="text" id="local-partida" name="local-partida" class="w-full p-3 border border-slate-300 rounded-lg" required>
                </div>
                <div class="mb-4">
                    <label for="local-chegada" class="block text-slate-800">Local de Chegada</label>
                    <input bind:value={destination} type="text" id="local-chegada" name="local-chegada" class="w-full p-3 border border-slate-300 rounded-lg" required>
                </div>
                <div class="mb-4">
                    <label for="aeroporto" class="block text-slate-800">Aeroporto</label>
                    <input bind:value={airport} type="text" id="aeroporto" name="aeroporto" class="w-full p-3 border border-slate-300 rounded-lg" required>
                </div>
                <div class="text-center">
                    <button type="submit" class="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold">
                        Cadastrar Ticket
                    </button>
                </div>
                <a class="text-center font-semibold text-sky-800" href="/tickets">Voltar</a>
            </form>
        </div>
    </section>
</div>
