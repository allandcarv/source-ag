import { useEffect, useState, type ChangeEvent } from 'react';

export const useFilteredData = <T>(data: T[], dataProp: keyof T) => {
  const [filteredData, setFilteredData] = useState<T[]>([]);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 2 && data) {
      setFilteredData(
        data.filter((entry) => {
          if (typeof entry[dataProp] === 'string') {
            return entry[dataProp].startsWith(e.target.value.trim());
          }

          return entry;
        })
      );
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => setFilteredData(data ?? []), [data]);

  return { filteredData, onInputChangeHandler };
};
