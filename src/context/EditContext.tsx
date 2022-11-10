import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Task } from 'src/api/taskApi';

type EditContextType = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setTask: Dispatch<SetStateAction<Task>>;
  task: Task;
};

const defaultTask = {
  id: 9999,
  body: 'default',
  isCompleted: false,
};

const EditContext = createContext<EditContextType>({
  modalIsOpen: false,
  setModalIsOpen: () => {},
  setTask: () => {},
  task: defaultTask,
});

type EditContextProviderProps = {
  children: ReactNode;
};

export const EditContextProvider = ({ children }: EditContextProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [task, setTask] = useState<Task>(defaultTask);
  const value = useMemo(
    () => ({
      modalIsOpen,
      setModalIsOpen,
      setTask,
      task,
    }),
    [modalIsOpen, task]
  );

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

export const useEditContext = () => useContext(EditContext);
