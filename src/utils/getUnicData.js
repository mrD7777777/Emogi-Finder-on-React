export function getUnicData(arr) {
  return arr.map((el) => ({
    ...el,
    keywords: [...new Set(el.keywords.split(" "))].join(" "),
  }));
}
