import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // static snackBar: MatSnackBar;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackBar: MatSnackBar) {
  }

  /**
 * Show alert message
 * @param message 
 * @param action 
 */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  /**
* Accept date object and return date in server format
* @param dateObj 
*/
  formatDate(dateObj, formatType) {
    let today = new Date(dateObj);
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var result = "";
    if (formatType == "yy-mm-dd") {
      result = year + '-' + (month + 1) + '-' + date;
    } else if (formatType == "dd-mm-yy") {
      result = date + '-' + (month + 1) + '-' + year;
    }
    return result;
  }
}
