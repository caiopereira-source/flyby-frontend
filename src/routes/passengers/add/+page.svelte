<script>
    import "../../../app.css"; // Importa o estilo global
    import { createPassenger, getTickets, getPassengers} from "$lib/fetch";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let tickets = [];
    let passengers = [];

    let name = '';
    let cpf = '';
    let phoneNumber = '';
    let airport = '';

    async function fetchData() {
        try {
        tickets = await getTickets(); // Atualiza tickets
        passengers = await getPassengers(); // Atualiza passageiros

        console.log(tickets);
        console.log(passengers);
        } catch (err) {
        error = err.message; // Armazena o erro
        }
    }

    onMount(() => {
        fetchData();
    });

    async function submitForm(){
        
    try {
        await createPassenger(name, cpf, phoneNumber, airport);
    } catch (error) {
        console.error('Erro ao criar o passageiro:', error);
    } finally {
        name = "";
        cpf = "";
        phoneNumber = "";
        airport = "";

        goto("/passengers");
    }
    }

</script>

<div class="bg-gray-50 text-gray-800 min-h-screen">
    <!-- Navbar -->
    <div class="bg-sky-700 font-semibold text-2xl px-4 py-2">
        <header class="text-white py-4 text-start">
            <h2>Cadastro de Cliente</h2>
        </header>
    </div>

    <!-- Formulário de Cadastro -->
    <section class="flex items-center justify-center py-16 px-10 md:px-20">
        <div class="max-w-7xl mb-6 mx-auto bg-white shadow-md rounded-lg p-6">
            <h4 class="text-3xl text-slate-800 font-semibold text-center mb-6">Preencha os Dados do Cliente</h4>
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
                    <select bind:value={airport}>
                        <option value="" disabled selected>Selecione o voo</option>
                        {#each tickets as ticket}
                          <option value={ticket.id}>{ticket.departure} &rarr; {ticket.destination}</option>
                        {/each}
                      </select>
                </div>
                <div class="text-center">
                    <button type="submit" class="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold">
                        Cadastrar Cliente
                    </button>
                </div>
                <a class="text-center font-semibold text-sky-800" href="/passengers">Voltar</a>
            </form>
        </div>
    </section>
</div>
