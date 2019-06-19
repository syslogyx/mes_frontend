import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { UtilityService } from '../common/utility.service';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor(
    private utility: UtilityService
  ) { }

  /**
   * Export in excel format when provided excel data
   * @param json 
   */
  exportAsExcelFile(json: object) {

    //Excel Title, Header, Data
    const title = json['title'];
    const header = json['header'];
    const data = json['body'];

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(title);


    //Add Row and formatting
    let titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Times New Roman', family: 4, size: 14, underline: 'double', bold: true }
    worksheet.addRow([]);

    worksheet.mergeCells(`A1:${json['excel_last_cell']}2`);

    //Blank Row 
    worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);

    var cellcount = 0;
    var rowCellCount = 0;
    // Add Data and Conditional Formatting
    data.forEach(d => {
      rowCellCount = d.length;
      let row = worksheet.addRow(d);
      // let qty = row.getCell(5);
      // let color = 'FF99FF99';
      // if (+qty.value < 500) {
      //   color = 'FF9999'
      // }

      // qty.fill = {
      //   type: 'pattern',
      //   pattern: 'solid',
      //   fgColor: { argb: color }
      // }


      d.forEach(rowVal => {
        cellcount++;
        var cellWdth = 150 / 100 * rowVal.toString().length;
        worksheet.getColumn(cellcount).width = cellWdth;
        worksheet.getColumn(cellcount).alignment = { vertical: 'middle', horizontal: 'center' };
      });
    });

    worksheet.addRow([]);


    //Footer Row
    let footerRow = worksheet.addRow(['This is system generated excel sheet.']);
    footerRow.font = { name: 'Times New Roman', size: 12 };
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCFFE5' }
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }

    //Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:${json['excel_last_cell']}${footerRow.number}`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver.saveAs(blob, title + '.xlsx');
    })

  }



  /**
  * Export as excel by providing excel data and excel file name
  * @param json 
  * @param excelFileName 
  */
  // public exportAsExcelFile(json: any[], excelFileName: string): void {

  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   // console.log('worksheet',worksheet);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  //   this.utility.openSnackBar(excelFileName+" exported successfully!!", '');
  // }

  // private saveAsExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE
  //   });
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  // }
}