// "State" argument in this case is not the *application* state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }

  return state;
}


/* ============

action is created/updated in actions/index.js, and looks like this:
{
  type: "BOOK_SELECTED",
  payload: book
}

============== */
