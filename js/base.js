function changeTheme(type) {
    var property = {'--base-color': ''};
    switch (type) {
        case 'white':
            property['--base-color'] = 'white';
            break;
        case 'black':
            property['--base-color'] = 'gray';
            break;
    }
    executeThemeChange(property);
}

/**
 * 设置样式
 * @param property
 */
function executeThemeChange(property) {
    for (var key in property) {
        document.documentElement.style.setProperty(key, property[key]);
    }

}
