function createMenuItemSimple(name, price) {
    const li = document.createElement('li');
    li.textContent = `${name} - ₹ ${price}`;
    return li;
}

function createSimpleMenu() {
    const menuUl = document.createElement('ul');

    const item1 = createMenuItemSimple('Dosa', 70);
    const item2 = createMenuItemSimple('Idli (2 pcs)', 50);
    const item3 = createMenuItemSimple('Puttu & Kadala Curry', 90);
    const item4 = createMenuItemSimple('Masala Chai', 30);

    menuUl.appendChild(item1);
    menuUl.appendChild(item2);
    menuUl.appendChild(item3);
    menuUl.appendChild(item4);
    return menuUl;
}

export default function (rootEl) {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Menu";
    rootEl.appendChild(h1);

    const menu = createSimpleMenu();

    const div1 = document.createElement("div");
    div1.classList.add("about", "menu");
    div1.appendChild(menu);
    rootEl.appendChild(div1);
}