export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const isBookOverdue = (dueDate) => {
  return new Date(dueDate) < new Date();
};

export function createMapById(array) {
  return Object.fromEntries(array.map((item) => [item.id, item]));
}
