const URL = 'https://14dtv3lu9k.execute-api.eu-central-1.amazonaws.com/';

export const getCultivations = async () => {
  const result = await fetch(`${URL}cultivations`);

  return result.json();
};

export const getCultivationUsers = async (cultivationId: string) => {
  const result = await fetch(`${URL}cultivations/${cultivationId}/users`);

  return result.json();
};

export const getCultivationRoles = async () => {
  const result = await fetch(`${URL}cultivation-roles`);

  return result.json();
};
