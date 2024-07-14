const URL = 'https://14dtv3lu9k.execute-api.eu-central-1.amazonaws.com/';

export const getCultivations = async () => {
  try {
    const result = await fetch(`${URL}cultivations`);

    if (!result.ok) {
      throw new Error('Error Fetching Cultivations');
    }

    return result.json();
  } catch (err) {
    throw new Error(`Error Fetching Cultivations: ${err}`);
  }
};

export const getUsers = async () => {
  try {
    const result = await fetch(`${URL}users`);

    if (!result.ok) {
      throw new Error('Error Fetching Users');
    }

    return result.json();
  } catch (err) {
    throw new Error(`Error Fetching Users: ${err}`);
  }
};

export const getCultivationUsers = async (cultivationId: string) => {
  try {
    const result = await fetch(`${URL}cultivations/${cultivationId}/users`);

    if (!result.ok) {
      throw new Error('Error Fetching Cultivation Users');
    }

    return result.json();
  } catch (err) {
    throw new Error(`Error Fetching Cultivation Users: ${err}`);
  }
};

export const getCultivationRoles = async () => {
  try {
    const result = await fetch(`${URL}cultivation-roles`);

    if (!result.ok) {
      throw new Error('Error Fetching Cultivation Roles');
    }

    return result.json();
  } catch (err) {
    throw new Error(`Error Fetching Cultivation Roles: ${err}`);
  }
};
