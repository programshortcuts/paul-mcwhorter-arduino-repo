// js/ui/sidebar-edit-mode.js
let editMode = false;
export function toggleEditMode() {
    editMode = !editMode;
}

export function isEditMode() {
    return editMode;
}

export function exitEditMode() {
    editMode = false;
}

// ======================
// EDIT MODE BUTTON
// ======================

export function initEditButton(renderSidebar) {
    const editBtn = document.querySelector("#editSideBarBtn");
    editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleEditMode();
        renderSidebar();
    });
}