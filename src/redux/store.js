import { createStore } from "redux";

import reducer from "./Cart/cartReducer";

const store = createStore(reducer)

export {store}