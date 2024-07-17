import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

export interface SelectedUsersContextProps {
  selectedUsers: Set<number>;
  addSelectUser: (id: number) => void;
  removeSelectUser: (id: number) => void;
}
const SelectedUsersContext = createContext<SelectedUsersContextProps>(
  {} as SelectedUsersContextProps
);

export const SelectedUsersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());

  const addSelectUser = (id: number) =>
    setSelectedUsers((prev) => new Set(prev.add(id)));

  const removeSelectUser = (id: number) =>
    setSelectedUsers((prev) => {
      prev.delete(id);

      return new Set(prev);
    });

  return (
    <SelectedUsersContext.Provider
      value={{ selectedUsers, addSelectUser, removeSelectUser }}
    >
      {children}
    </SelectedUsersContext.Provider>
  );
};

export const useSelectedUsers = () => useContext(SelectedUsersContext);
