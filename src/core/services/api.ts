import type { CultivationDTO } from '../../interfaces/cultivation-dto';
import type {
  CultivationUserDTO,
  CultivationUserRequestBody,
} from '../../interfaces/cultivation-user-dto';
import type { RoleDTO } from '../../interfaces/role-dto';
import type { UserDTO } from '../../interfaces/user-dto';

const URL = 'https://14dtv3lu9k.execute-api.eu-central-1.amazonaws.com/';

export const getCultivations = async (): Promise<CultivationDTO[]> => {
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

export const getUsers = async (): Promise<UserDTO[]> => {
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

export const getCultivationUsers = async (
  cultivationId: string
): Promise<CultivationUserDTO[]> => {
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

export const getCultivationRoles = async (): Promise<RoleDTO[]> => {
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

export const postCultivation = async (
  body: Record<'name', string>
): Promise<CultivationDTO> => {
  try {
    const result = await fetch(`${URL}cultivations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!result.ok) {
      throw new Error('Error Creating Cultivation');
    }

    return result.json();
  } catch (err) {
    throw new Error(`Error Creating Cultivation: ${err}`);
  }
};

export const postUserToCultivation = async (
  body: CultivationUserRequestBody,
  cultivationId: string
): Promise<CultivationUserDTO> => {
  try {
    const result = await fetch(`${URL}cultivations/${cultivationId}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!result.ok) {
      throw new Error('Error Creating Cultivation User');
    }

    return result.json();
  } catch (err) {
    throw new Error(`Error Creating Cultivation User: ${err}`);
  }
};
