export const menus = [
    {
        title: 'Finanzas',
        menuId: 'finance',
        tags: ['Contabilidad', 'Cliente', 'Cobranzas'],
    },
    {
        title: 'Comercial',
        menuId: 'comercial',
        tags: ['Ingresos', 'Egresos'],
    },
    {
        title: 'Operaciones',
        menuId: 'operation',
        tags: ['Recursos', 'Productos']
    },
    {
        title: 'Gestión de negocios',
        menuId: 'business',
        tags: ['Debe', 'Debo'],
    },
    {
        title: 'RR.HH.',
        menuId: 'rrhh',
        tags: ['Colaboradores', 'Sueldos'],
    },
];

export const findMenu = (name) => menus.find((m) => m.title === name || m.menuId === name);