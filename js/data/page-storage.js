// page-storage.js
import { pages } from "./pages.js";

const STORAGE_KEY = "sidebar-pages";

export function savePages(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}

export function loadPages() {

    const storedPages = localStorage.getItem(STORAGE_KEY);

    if (storedPages) {

        return JSON.parse(storedPages);

    }

    return pages;

}