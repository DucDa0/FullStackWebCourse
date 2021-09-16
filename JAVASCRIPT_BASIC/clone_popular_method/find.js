Array.prototype.findCloned = function (cb) {
  for (let item of this) {
    if (cb(item)){
        return item;
    };
  }
};

console.log(
  [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].findCloned(
    (item) => item.id === 3
  )
);
