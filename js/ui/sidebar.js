// sidebar.js
import { loadPages, savePages } from "../data/page-storage.js";

let pages = loadPages();

let editMode = false;



export function initSidebar() {

    loadSidebarPages();

    initCreatePageButton();

    initEditSidebarButton();

    initSidebarOutsideClick();

}



function loadSidebarPages() {

    const sideBarList = document.querySelector("#sideBarList");

    const mainLandingPage = document.querySelector(".main-landing-page");

    sideBarList.innerHTML = "";



    pages.forEach(page => {

        const li = document.createElement("li");



        const link = document.createElement("a");

        link.href = "#";

        link.textContent = page.title;



        link.addEventListener("click", (e) => {

            e.preventDefault();

            mainLandingPage.innerHTML = page.content;

        });



        li.append(link);



        if (editMode) {

            const deleteBtn = document.createElement("button");

            deleteBtn.textContent = "-";

            deleteBtn.classList.add("delete-page-btn");



            deleteBtn.addEventListener("click", () => {

                const confirmed = confirm(
                    `Are you sure you want to delete "${page.title}" ?`
                );

                if (!confirmed) return;



                pages = pages.filter(p => p.id !== page.id);



                savePages(pages);

                loadSidebarPages();

            });



            li.append(deleteBtn);

        }



        sideBarList.append(li);

    });

}



function initCreatePageButton() {

    const createBtn = document.querySelector("#createSidePage");



    createBtn.addEventListener("click", () => {

        const title = prompt("Enter page title");



        if (!title) return;



        const newPage = {

            id: crypto.randomUUID(),

            title,

            content: `
                <section class="lesson-page">
                    <h2>${title}</h2>
                </section>
            `
        };



        pages.push(newPage);



        savePages(pages);

        loadSidebarPages();

    });

}



function initEditSidebarButton() {

    const editBtn = document.querySelector("#editSidebar");



    editBtn.addEventListener("click", () => {

        editMode = !editMode;

        loadSidebarPages();

    });

}



function initSidebarOutsideClick() {

    document.addEventListener("click", (e) => {

        if (!editMode) return;



        const sidebar = document.querySelector(".side-bar");



        const clickedInsideSidebar = sidebar.contains(e.target);



        if (!clickedInsideSidebar) {

            editMode = false;

            loadSidebarPages();

        }

    });

}