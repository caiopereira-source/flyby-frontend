const passengersUrl = 'http://localhost:8888/passengers';
const ticketsUrl = 'http://localhost:8888/flights';


export async function getTickets() {
    const response = await fetch('http://localhost:8888/flights');
    if (!response.ok) {
        throw new Error('Erro ao buscar tickets');
    }
    return response.json(); // Retorna os dados como JSON
}

// Função para buscar passageiros
export async function getPassengers() {
    const response = await fetch('http://localhost:8888/passengers');
    if (!response.ok) {
        throw new Error('Erro ao buscar passageiros');
    }
    return response.json(); // Retorna os dados como JSON
}

export async function deleteFlight(id) {
    try {
      const response = await fetch(`http://localhost:8888/flights/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o item.');
      }

    } catch (err) {
      console.error(err);
      alert('Falha ao excluir o item.');
    }
  }
  
  export async function deletePassenger(id) {
    try {
      const response = await fetch(`http://localhost:8888/passengers/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o item.');
      }

    } catch (err) {
      console.error(err);
      alert('Falha ao excluir o item.');
    }
  }

  export async function createPassenger(name, cpf, phoneNumber, airport) {
    try {
      const response = await fetch('http://localhost:8888/passengers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "name": name,
            "cpf": cpf,
            "phoneNumber": phoneNumber,
            "flight": {
                "id": airport
            },
          }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar o cadastro.');
      }

    } catch (err) {
      console.error(err);
      alert(err.message || 'Ocorreu um erro ao cadastrar.');
    }
  }

  export async function createTicket(departure, destination, airport) {
    try {
      const response = await fetch('http://localhost:8888/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "departure": departure,
            "destination": destination,
            "airport": airport,
          }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar o cadastro.');
      }

    } catch (err) {
      console.error(err);
      alert(err.message || 'Ocorreu um erro ao cadastrar.');
    }
  }

  export async function updateTicket(id, departure, destination, airport) {
    try {
      const response = await fetch('http://localhost:8888/flights', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": id,
            "departure": departure,
            "destination": destination,
            "airport": airport,
          }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar o cadastro.');
      }

    } catch (err) {
      console.error(err);
      alert(err.message || 'Ocorreu um erro ao cadastrar.');
    }
  }

  export async function updatePassenger(id, name, cpf, phoneNumber, airport) {
    try {
      const response = await fetch('http://localhost:8888/passengers', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": id,
            "name": name,
            "cpf": cpf,
            "phoneNumber": phoneNumber,
            "flight": {
              "id": airport,
            }
          }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar o cadastro.');
      }

    } catch (err) {
      console.error(err);
      alert(err.message || 'Ocorreu um erro ao cadastrar.');
    }
  }
  
    
  