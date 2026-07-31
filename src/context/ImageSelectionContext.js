import { createContext, useContext, useState } from 'react';

const ImageSelectionContext = createContext();

export const ImageSelectionProvider = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const addImage = (url) => {
    setSelectedImages((prev) => {
      if (!prev.includes(url)) return [...prev, url];
      return prev;
    });
  };

  const removeImage = (url) => {
    setSelectedImages((prev) => prev.filter((u) => u !== url));
  };

  const clearSelection = () => setSelectedImages([]);

  return (
    <ImageSelectionContext.Provider
      value={{ selectedImages, addImage, removeImage, clearSelection }}
    >
      {children}
    </ImageSelectionContext.Provider>
  );
};

export const useImageSelection = () => useContext(ImageSelectionContext);
