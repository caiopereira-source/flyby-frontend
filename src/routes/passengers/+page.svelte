<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import "../../app.css"; // Importa o estilo global
    import { getPassengers, getTickets, deletePassenger, updatePassenger} from "$lib/fetch";

    let tickets = []; // Armazena os dados de tickets
    let passengers = []; // Armazena os dados de passageiros
    let error = null; // Para tratar erros

    let showModal = false;

    let id = '';
    let name = '';
    let cpf = '';
    let phoneNumber = '';
    let airport = '';

    function openModal(form_id, form_name, form_cpf, form_phoneNumber, form_airport) {
        showModal = true;
        id = form_id;
        name = form_name;
        cpf = form_cpf;
        phoneNumber = form_phoneNumber;
        airport = form_airport;

        console.log(id, name, cpf, phoneNumber, airport);

    }

    function handleDelete(){
        
    }

    // Função para fechar o modal
    function closeModal() {
        showModal = false;
    }

    async function submitForm(){
        
        try {
            await updatePassenger(id, name, cpf, phoneNumber, airport);
        } catch (error) {
            console.error('Erro ao atualizar o passageiro:', error);
        } finally {
            id = "";
            name = "";
            cpf = "";
            phoneNumber = "";
            airport = "";
    
            closeModal();
            fetchData();
        }
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


</script>

<div class="bg-gray-50 text-gray-800 min-h-screen">
    <!-- Navbar -->
    <div class="bg-sky-700 font-semibold text-2xl px-4 py-2">
        <header class="text-white py-4 text-start">
            <h2>Dashboard</h2>
        </header>
    </div>

    <!-- Clientes Section -->
    <section id="clients" class="flex mt-20 items-center justify-center py-8 pb-4 md:px-20">
        <div class="max-w-7xl mb-6 mx-auto">
            <h4 class="text-3xl text-slate-800 font-semibold text-center mb-6">Clientes Registrados</h4>
            <div class="overflow-x-auto bg-white shadow-md rounded-lg">
                <table class="table-auto">
                    <thead>
                        <tr class="bg-sky-700 text-white">
                            <th class="py-3 px-6 text-left">#</th>
                            <th class="py-3 px-6 text-left">Nome</th>
                            <th class="py-3 px-6 text-left">CPF</th>
                            <th class="py-3 px-6 text-left">Telefone</th>
                            <th class="py-3 px-6 text-left">Aeroporto</th>
                            <th class="py-3 px-6 text-left">Partida</th>
                            <th class="py-3 px-6 text-left">Destino</th>
                            <th class="py-3 px-6 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each passengers as passenger}
                            <tr class="border-b border border-slate-300">
                                <td class="py-3 px-6 text-center">{passenger.id}</td>
                                <td class="py-3 px-6">{passenger.name}</td>
                                <td class="py-3 px-6">{passenger.cpf}</td>
                                <td class="py-3 px-6">{passenger.phoneNumber}</td>
                                <td class="py-3 px-6">{passenger.flight.airport}</td>
                                <td class="py-3 px-6">{passenger.flight.departure}</td>
                                <td class="py-3 px-6">{passenger.flight.destination}</td>
                                <td class="py-3 px-6 text-center">
                                    <button on:click={() => openModal(passenger.id, passenger.name, passenger.cpf, passenger.phoneNumber, passenger.flight.id)} class="text-blue-500">Editar</button>
                                    <button on:click={() => (deletePassenger(passenger.id), fetchData())} class="text-red-500 ml-3">Excluir</button>
                                </td>
                            </tr>
                        {/each}
                        
                        <tr>
                            <td colspan="8" class="py-3 text-center">
                                <button on:click={() => (goto("/passengers/add"))} class="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold">
                                    Adicionar Passageiro
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    </section>

    <section class="relative py-16 px-10 md:px-20">
        <a href="/tickets" class="right-0 bottom-10 text-end text-slate-950 rounded-lg font-semibold">
            Ir para Tickets
        </a>
    </section>

    {#if showModal}
  <!-- Modal -->
  <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg w-96">
      <h2 class="text-xl font-semibold mb-4">Atualização de Dados do Cliente</h2>
      <form on:submit={submitForm}>
        <div class="mb-4">
          <label for="nome" class="block text-slate-800">Nome</label>
          <input bind:value={name} type="text" id="nome" name="nome" class="w-full p-3 border border-slate-300 rounded-lg" required>
        </div>
        <div class="mb-4">
          <label for="cpf" class="block text-slate-800">CPF</label>
          <input bind:value={cpf} type="text" id="cpf" name="cpf" class="w-full p-3 border border-slate-300 rounded-lg" required>
        </div>
        <div class="mb-4">
          <label for="telefone" class="block text-slate-800">Telefone</label>
          <input bind:value={phoneNumber} type="text" id="telefone" name="telefone" class="w-full p-3 border border-slate-300 rounded-lg" required>
        </div>
        <div class="mb-4">
          <label for="voo" class="block text-slate-800">Voo</label>
          <select bind:value={airport} class="w-full p-3 border border-slate-300 rounded-lg" required>
            <option value="" disabled selected>Selecione o voo</option>
            {#each tickets as ticket}
              <option value={ticket.id}>{ticket.departure} &rarr; {ticket.destination}</option>
            {/each}
          </select>
        </div>
        <div class="text-center">
          <button type="submit" class="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold">
            Atualizar Cliente
          </button>
        </div>
        <button on:click={closeModal} class="text-center block font-semibold text-sky-800 mt-4">Voltar</button>
      </form>
      <button on:click={closeModal} class="absolute top-2 right-2 text-xl text-gray-500">×</button>
    </div>
  </div>
{/if}


</div>
