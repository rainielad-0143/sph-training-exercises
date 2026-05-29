export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export function createMapById(array) {
  return Object.fromEntries(array.map((item) => [item.id, item]));
}
