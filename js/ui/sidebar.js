// js/ui/sidebar.js

import { pages } from "../data/pages.js";
import { lessonTemplate } from "../templates/lesson-template.js";

import { toggleEditMode, isEditMode, exitEditMode } from "./sidebar-edit-mode.js";
export function initSidebar() {
    renderSidebar();
    initSidebarClickHandler();
    initCreatePageButton();
    initEditButton(renderSidebar);
    initOutsideClickExit();
    initKeyExit();
}
// ======================
// RENDER SIDEBAR
// ======================
function renderSidebar() {

    const sideBarList = document.querySelector("#sideBarList");

    sideBarList.innerHTML = "";



    pages.forEach(page => {

        const li = document.createElement("li");

        const link = document.createElement("a");



        link.href = "#";

        link.textContent = page.title;

        link.dataset.pageId = page.id;



        li.append(link);



        // =========================
        // DELETE BUTTON (EDIT MODE ONLY)
        // =========================

        if (isEditMode()) {

            const deleteBtn = document.createElement("button");

            deleteBtn.textContent = "-";

            deleteBtn.classList.add("delete-page-btn");



            deleteBtn.addEventListener("click", (e) => {

                e.stopPropagation();



                const index = pages.findIndex(p => p.id === page.id);



                if (index !== -1) {

                    pages.splice(index, 1);

                }



                renderSidebar();



                if (pages.length > 0) {

                    loadPage(pages[0]);

                } else {

                    clearPage();

                }

            });



            li.append(deleteBtn);

        }



        sideBarList.append(li);

    });

}
// ======================
// CLICK SIDEBAR LINKS
// ======================
function initSidebarClickHandler() {

    const sideBarList = document.querySelector("#sideBarList");



    sideBarList.addEventListener("click", (e) => {

        const link = e.target.closest("a");

        if (!link) return;



        e.preventDefault();



        const pageId = link.dataset.pageId;



        const page = pages.find(page => page.id === pageId);



        if (!page) return;



        loadPage(page);

    });

}
// ======================
// LOAD PAGE
// ======================
function loadPage(page) {

    const mainLandingPage = document.querySelector(".main-landing-page");



    mainLandingPage.innerHTML = page.content;

}
// ======================
// CLEAR PAGE
function clearPage() {
    const mainLandingPage = document.querySelector(".main-landing-page");
    mainLandingPage.innerHTML = lessonTemplate;
}
// ======================
// CREATE PAGE BUTTON
// ======================
function initCreatePageButton() {
    const createBtn = document.querySelector("#createSidePage");



    createBtn.addEventListener("click", () => {

        const title = prompt("Enter page title");

        if (!title) return;



        const newPage = {

            id: crypto.randomUUID(),

            title: title,

            content: lessonTemplate.replace("New Lesson", title)

        };



        pages.push(newPage);



        renderSidebar();



        loadPage(newPage);

    });

}

// ======================
// EDIT MODE BUTTON
// ======================

// function initEditButton(renderSidebar) {
//     const editBtn = document.querySelector("#editSideBarBtn");
//     editBtn.addEventListener("click", (e) => {
//         e.stopPropagation();
//         toggleEditMode();
//         renderSidebar();
//     });
// }

// ======================
// EXIT ON OUTSIDE CLICK
// ======================
function initOutsideClickExit() {
    document.addEventListener("click", (e) => {
        if (!isEditMode()) return;
        const sidebar = document.querySelector(".side-bar");
        if (!sidebar.contains(e.target)) {
            exitEditMode();
            renderSidebar();
        }
    });
}
// ======================
// EXIT ON KEY PRESS
// ======================
function initKeyExit() {
    document.addEventListener("keydown", (e) => {
        if (!isEditMode()) return;
        if (e.key === "Escape") {
            exitEditMode();
            renderSidebar();
        }
    });
}