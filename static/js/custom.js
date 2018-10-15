function openTab(evt, tab_id) {
    // Declare all variables
    let i, tab_content, tab_button;

    // Get all elements with class="tab-content" and hide them
    tab_content = document.getElementsByClassName("tab-content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    // Get all elements with class="tab-button" and remove the class "active"
    tab_button = document.getElementsByClassName("tab-button");
    for (i = 0; i < tab_button.length; i++) {
        tab_button[i].className = tab_button[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab_id).style.display = "block";
    evt.currentTarget.className += " active";
}