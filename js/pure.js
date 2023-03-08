const removeCartItem = (cart, id)=> {
    const tempArr = [...cart];
    let idx = tempArr.findIndex((e) => {
        if (e.id == id)
            return true;
    });
    if (idx == -1) return;
    tempArr.splice(idx, 1);
    return tempArr;
}

module.exports = { removeCartItem };

