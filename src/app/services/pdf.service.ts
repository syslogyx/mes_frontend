import { Injectable } from '@angular/core';
import { UtilityService } from '../common/utility.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Injectable()
export class PdfService {

    constructor(
        private utility: UtilityService
    ) { }

    /**
     * Export as Pdf by providing pdf data and pdf
     * @param json 
     * @param pdfFileName 
     */
    public exportAsPdfFile(jsonColumn: any[], jsonBody: any[], pdfFileName: string): void {

        const doc = new jsPDF();

        var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
        var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

        doc.autoTable({
            headStyles: { halign: 'center' },
            bodyStyles: { halign: 'center' },
            body: jsonBody,
            columns: jsonColumn
        });
        doc.setTextColor(100);
        doc.setFontSize(10);
        doc.text(pdfFileName, pageWidth / 2, 10, 'center');
        doc.save(pdfFileName + '.pdf');
        this.utility.openSnackBar(pdfFileName + " exported successfully!!", '');
    }


    // exportAsPdf() {
    //   var pdfsize = 'a4';
    //   var pdf = new jsPDF('l', 'pt', pdfsize);

    //   var res = pdf.autoTableHtmlToJson(document.getElementById("mytable"));
    //   console.log("Table Response",res);
    //   // var res = this.eodList;

    //   var header = function (data) {
    //     pdf.setFontSize(18);
    //     pdf.setTextColor(40);
    //     pdf.setFontStyle('normal');
    //     //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    //     pdf.text("Testing Report", data.settings.margin.left, 50);
    //   }

    //   pdf.autoTable(res.columns, res.data, {

    //     beforePageContent: header,
    //     startY: 60,
    //     drawHeaderRow: function (row, data) {
    //       row.height = 46;
    //     },
    //     drawHeaderCell: function (cell, data) {
    //       pdf.rect(cell.x, cell.y, cell.width, cell.height, cell.styles.fillStyle);
    //       pdf.setFillColor(230);
    //       pdf.rect(cell.x, cell.y + (cell.height / 2), cell.width, cell.height / 2, cell.styles.fillStyle);
    //       pdf.autoTableText(cell.text, cell.textPos.x, cell.textPos.y, {
    //         halign: cell.styles.halign,
    //         valign: cell.styles.valign
    //       });
    //       pdf.setTextColor(100);
    //       var text = data.table.rows[0].cells[data.column.dataKey].text;
    //       pdf.autoTableText(text, cell.textPos.x, cell.textPos.y + (cell.height / 2), {
    //         halign: cell.styles.halign,
    //         valign: cell.styles.valign
    //       });
    //       return false;
    //     },
    //     drawRow: function (row, data) {
    //       if (row.index === 0) return false;
    //     },
    //     margin: {
    //       top: 60
    //     },
    //     styles: {
    //       overflow: 'linebreak',
    //       fontSize: 10,
    //       tableWidth: 'auto',
    //       columnWidth: 'auto',
    //     },
    //     columnStyles: {
    //       1: {
    //         columnWidth: 'auto'
    //       }
    //     },

    //   });

    //   pdf.save(pdfsize + ".pdf");
    // };


}