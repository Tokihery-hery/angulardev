export class Item {
    constructor (
      public id: string = "",
      public name: string = "",
      public imagePath: string = ''
    ) {} 
  }
import { AbstractControl } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';
 
export const mimeType = (control: AbstractControl): Promise<{[ key: string ]: any}> | Observable<{[ key: string ]: any}> => {
  if (typeof(control.value) === 'string') {
    return of();
  }
  const file:any = control.value as File;
  const fileReader:any = new FileReader();
  const frObs = Observable.create((observer: Observer<{[ key: string ]: any}>) => {
     fileReader.addEventListener('loadend', () => {
    const arr = new Uint8Array(fileReader.result).subarray(0, 4);
    let header = '';
    let isValid = false;
    for (let i = 0; i < arr.length; i++) {
      header += arr[i].toString(16);
    }
    switch (header) {
      case '89504e47':
          isValid = true;
          break;
      case '89504e47':  // png
      case '47494638':  // gif
      case 'ffd8ffe0':  // JPEG IMAGE (Extensions: JFIF, JPE, JPEG, JPG)
      case 'ffd8ffe1':  // jpg: Digital camera JPG using Exchangeable Image File Format (EXIF)
      case 'ffd8ffe2':  // jpg: CANNON EOS JPEG FILE
      case 'ffd8ffe3':  // jpg: SAMSUNG D500 JPEG FILE
      case 'ffd8ffe8':  // jpg: Still Picture Interchange File Format (SPIFF)
          isValid = true;
          break;
      default:
          isValid = false;
          break;
    }
    if (isValid) {
      observer.next({});
    } else {
      observer.next({ invalidMimeType: true });
    }
      observer.complete();
    });
      fileReader.readAsArrayBuffer(file);
  });
  return frObs;
};