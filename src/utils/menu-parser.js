export const menus = [
    {title: 'Finanzas', menuId: 'finance'},
    {title: 'Comercial', menuId: 'comercial'},
    {title: 'Operaciones', menuId: 'operation'},
    {title: 'Gestión de negocios', menuId: 'business'},
    {title: 'RR.HH.', menuId: 'rrhh'},
];

export const findMenu = (name) => menus.find((m) => m.title === name || m.menuId === name);