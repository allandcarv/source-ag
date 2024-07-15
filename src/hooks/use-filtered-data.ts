import { useEffect, useState, type ChangeEvent } from 'react';

export const useFilteredData = <T>(data: T[], dataProp: keyof T) => {
  const [filteredData, setFilteredData] = useState<T[]>([]);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 2 && data) {
      setFilteredData(
        data.filter((entry) => {
          if (typeof entry[dataProp] === 'string') {
            return entry[dataProp]
              .toLowerCase()
              .startsWith(e.target.value.trim().toLowerCase());
          }

          return entry;
        })
      );
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    if (data.length) {
      setFilteredData(data);
    }
  }, [data]);

  return { filteredData, onInputChangeHandler };
};
