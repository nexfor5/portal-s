import {findReport, filterReportByMenuId} from '../report-parser';

test('Report parser findReport', () => {
    const report = findReport('Reporte 5');
    expect(report).toBeDefined();
    expect(report.title).toBe('Reporte 5');
    expect(report.reportId).toBe('report-5');
    expect(report.menuId).toBe('finance');
});

test('Report parser filterReportByMenuId', () => {
    const reports = filterReportByMenuId('finance');
    expect(reports).toBeDefined();
    expect(reports.length).toBe(5);
});