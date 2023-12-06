import { API_URLS } from "../modulos/urls";
export const iniciar = async (usuarios) => {
  try {
    const response = await fetch(API_URLS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarios),
    });

    if (response.ok) {
      const data = await response.json();
      return true;
    } else {
      const errorResponse = await response.json();
      return false;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return false;
  }
};
