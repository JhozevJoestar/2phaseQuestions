function debounce(f, ms) {
  let num = false;
  return function () {
    if (num) return;
    f.apply(this, arguments);
    num = true;
    setTimeout(() => (num = false), ms);
  };
}
