export const reports = [
    {
        image: 'https://via.placeholder.com/320x200',
        title: 'Reporte 1',
        reportId: 'report-1',
        description: 'Descripción del reporte.',
        menuId: 'finance',
        tags: ['Contabilidad', 'Cliente'],
    },
    {
        image: 'https://via.placeholder.com/320x200',
        title: 'Reporte 2',
        reportId: 'report-2',
        description: 'Descripción del reporte.',
        menuId: 'finance',
        tags: ['Cliente'],
    },
    {
        image: 'https://via.placeholder.com/320x200',
        title: 'Reporte 3',
        reportId: 'report-3',
        description: 'Descripción del reporte.',
        menuId: 'finance',
        tags: ['Contabilidad'],
    },
    {
        image: 'https://via.placeholder.com/320x200',
        title: 'Reporte 4',
        reportId: 'report-4',
        description: 'Descripción del reporte.',
        menuId: 'finance',
        tags: ['Cobranza'],
    },
    {
        image: 'https://via.placeholder.com/320x200',
        title: 'Reporte 5',
        reportId: 'report-5',
        description: 'Descripción del reporte.',
        menuId: 'finance',
        tags: ['Contabilidad', 'Cliente'],
    },
];

export const findReport = (name) => reports.find((r) => r.name === name || r.reportId === name);
export const filterReportByMenuId = (menuId) => reports.filter((r) => r.menuId === menuId);