
export const enviador = async (url, valor) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valor),
    });

    if (response.ok) {
      const data = await response.json();
      return true;
    } else {
     await response.json();
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};
