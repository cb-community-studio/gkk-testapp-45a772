import React from "react";
import { render, screen } from "@testing-library/react";

import ArticlesPage from "../ArticlesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders articles page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArticlesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("articles-datatable")).toBeInTheDocument();
    expect(screen.getByRole("articles-add-button")).toBeInTheDocument();
});
