const objUniqueCheck = (prevObj, currObj) => {
  const mergedData = [...prevObj, ...currObj];
  const uniqueData = mergedData.filter(
    (item, index, self) => index === self.findIndex(t => t.id === item.id),
  );

  return uniqueData;
};

export default objUniqueCheck;
