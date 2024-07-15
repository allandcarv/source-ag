import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

export interface SelectedUsersContextProps {
  selectedUsers: Set<number>;
  setSelectedUsers: (id: number) => void;
}
const SelectedUsersContext = createContext<SelectedUsersContextProps>(
  {} as SelectedUsersContextProps
);

export const SelectedUsersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());

  const setSelectedUsersHandler = (id: number) =>
    setSelectedUsers((prev) => new Set(prev.add(id)));

  return (
    <SelectedUsersContext.Provider
      value={{ selectedUsers, setSelectedUsers: setSelectedUsersHandler }}
    >
      {children}
    </SelectedUsersContext.Provider>
  );
};

export const useSelectedUsers = () => useContext(SelectedUsersContext);
