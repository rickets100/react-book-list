export function selectBook(book) {
/* =========
   selectBook is an ActionCreator. It needs to return an action (an action is an object with a "type" property). It's essentially a broadcast that goes out to all the reducers, but only the ones that have a case in its switch-statement will do anything with the information.

 ========= */
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
