export function formatSheetData(rows: string[][]): any[] {
    if (!rows || rows.length === 0){
        return [];
    }

    const headers = rows[0];
    return rows.slice(1).map((row) => {
        const rowObject = {};
        headers.forEach((header, index) => {
            rowObject[header] = row[index];
        });
        return rowObject;
    })
}