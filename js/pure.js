const removeCartItem = (cart, id) => {
  const tempArr = [...cart];
  let idx = tempArr.findIndex((e) => {
    if (e.id == id) return true;
  });
  if (idx == -1) return;
  tempArr.splice(idx, 1);
  return tempArr;
};
// i know its duplicated , DRY principle is not applied here
const deleteProduct = (product, id) => {
  
const tempProd = [...product];
  let idx = tempProd.findIndex((e) => {
    if (e.id == id) return true;
  });
  if (idx == -1) return ;
  tempProd.splice(idx, 1);
  return tempProd;
};

module.exports = { removeCartItem, deleteProduct};
