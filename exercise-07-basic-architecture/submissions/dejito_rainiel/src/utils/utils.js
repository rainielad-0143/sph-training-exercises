export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

<<<<<<< HEAD
=======
export const isBookOverdue = (dueDate) => {
  return new Date(dueDate) < new Date();
};

>>>>>>> 00af33f (Added DRY principle in BorrowedBooks and MemberHistory)
export function createMapById(array) {
  return Object.fromEntries(array.map((item) => [item.id, item]));
}
