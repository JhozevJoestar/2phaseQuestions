let arr = [];

for (let name of names) {
  let el = fetch(`https://api.github.com/users/${name}`).then(
    (successResponse) => {
      if (successResponse.status != 200) {
        return null;
      } else {
        return successResponse.json();
      }
    },
    (failResponse) => {
      return null;
    }
  );
  arr.push(el);
}

let results = await Promise.all(arr);

return results;

// Сделать все через axios намного проще