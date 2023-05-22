import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import personalHomePageReducer from "../features/personalHomepage/personalHomepageSlice";
import themeReducer from "../common/themeSlice";
import saga from "./saga";

const createSagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomePageReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;