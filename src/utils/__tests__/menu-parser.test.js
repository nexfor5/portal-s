import {findMenu} from '../menu-parser';

test('Menu parser', () => {
    const menu = findMenu('comercial');
    expect(menu).toBeDefined();
    expect(menu.title).toBe('Comercial');
    expect(menu.menuId).toBe('comercial');
});