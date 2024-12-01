<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { getPassengers, getTickets, deleteFlight, updateTicket} from "$lib/fetch";
    import "../../app.css"; // Importa o estilo global

    let tickets = []; // Armazena os dados de tickets
    let passengers = []; // Armazena os dados de passageiros
    let error = null; // Para tratar erros
    let id = '';
    let departure = '';
    let destination = '';
    let airport = '';
    let showModal = false;

    function openModal(form_id, form_departure, form_destination, form_airport) {
        showModal = true;
        id = form_id;
        departure = form_departure;
        destination = form_destination;
        airport = form_airport;

    }

    // Função para fechar o modal
    function closeModal() {
        showModal = false;
    }


    async function fetchData() {
        try {
        tickets = await getTickets(); // Atualiza tickets
        passengers = await getPassengers(); // Atualiza passageiros
        } catch (err) {
        error = err.message; // Armazena o erro
        }
    }

    onMount(() => {
        fetchData();
    });

    async function submitForm(){
        
        try {
            await updateTicket(id, departure, destination, airport);
        } catch (error) {
            console.error('Erro ao atualizar o Ticket!:', error);
        } finally {
            id = "";
            departure = "";
            destination = "";
            airport = "";
    
            closeModal();
            fetchData();
        }
        }

</script>

<div class="bg-gray-50 text-gray-800 min-h-screen">
    <!-- Navbar -->
    <div class="bg-sky-700 font-semibold text-2xl px-4 py-2">
        <header class="text-white py-4 text-start">
            <h2>Dashboard</h2>
        </header>
    </div>

    <!-- Tickets Section -->
    <section id="tickets" class="flex mt-20 items-center justify-center py-8 pb-4 md:px-20">
        <div class="max-w-7xl mb-6 mx-auto">
            <h4 class="text-3xl text-slate-800 font-semibold text-center mb-6">Tickets de Viagem Registrados</h4>
            <div class="overflow-x-auto bg-white shadow-md rounded-lg">
                <table class="table-auto">
                    <thead>
                        <tr class="bg-sky-700 text-white">
                            <th class="py-3 px-6 text-left">#</th>
                            <th class="py-3 px-6 text-left">Local de Partida</th>
                            <th class="py-3 px-6 text-left">Local de Chegada</th>
                            <th class="py-3 px-6 text-left">Aeroporto</th>
                            <th class="py-3 px-6 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each tickets as ticket}
                        <tr class="border-b border border-slate-300">
                            <td class="py-3 px-6 text-center">{ticket.id}</td>
                            <td class="py-3 px-6">{ticket.departure}</td>
                            <td class="py-3 px-6">{ticket.destination}</td>
                            <td class="py-3 px-6">{ticket.airport}</td>
                            <td class="py-3 px-6 text-center">
                                <button on:click={() => (openModal(ticket.id, ticket.departure, ticket.destination, ticket.airport))} class="text-blue-500">Alterar</button>
                                <button on:click={() => (deleteFlight(ticket.id).then(fetchData()))} class="text-red-500 ml-3">Cancelar</button>
                            </td>
                        </tr>
	                    {/each}
                        <tr>
                            <td colspan="5" class="py-3 text-center">
                                <button on:click={() => (goto("/tickets/add"))} class="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold">
                                    Adicionar Novo Ticket
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        </div>
    </section>
            {#if showModal}
        <!-- Modal -->
        <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div class="bg-white p-6 rounded-lg w-96">
            <h2 class="text-xl font-semibold mb-4">Atualização de Ticket</h2>
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
                    Atualizar Ticket
                </button>
                </div>
                <a href="/tickets" class="text-center block font-semibold text-sky-800 mt-4">Voltar</a>
            </form>
            <button on:click={closeModal} class="absolute top-2 right-2 text-xl text-gray-500">×</button>
            </div>
        </div>
        {/if}
    <section class="relative py-16 px-10 md:px-20">
        <a href="/passengers" class="right-0 bottom-10 text-end text-slate-950 rounded-lg font-semibold">
            Ir para Passageiros
        </a>
    </section>

</div>
