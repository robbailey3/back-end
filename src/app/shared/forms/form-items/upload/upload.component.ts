import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Debug } from 'src/app/global/debug';

@Component({
  selector: 'rb-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadComponent),
      multi: true
    }
  ]
})
export class UploadComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() id: string;
  @Input() accept: string;
  @Input() multiple = false;
  @Input() required = false;
  @Input() showFilePreviews = false;
  @Input() maxFileSize = 2000000;
  imagePreviews: HTMLImageElement[] = [];
  previewsLoaded = false;
  previewsLoading = false;
  constructor() {}
  onChange(_: any) {}
  writeValue(value: string): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(): void {}

  change($event) {
    try {
      const files = $event.target.files as FileList;
      if (this.validateFiles(files)) {
        this.imagePreviews = [];
        this.onChange(files);
        if (this.showFilePreviews) {
          this.generateFilePreviews(files);
        }
      } else {
        throw new Error('File is too large');
      }
    } catch ($e) {
      console.error($e);
    }
  }
  generateFilePreviews(files: FileList) {
    this.previewsLoading = true;
    const imagePromises = [];
    for (let i = 0; i < files.length; i += 1) {
      imagePromises.push(this.generateFilePreview(files.item(i)));
    }
    return Promise.all(imagePromises).then((images: HTMLImageElement[]) => {
      this.previewsLoading = false;
      this.previewsLoaded = true;
      this.imagePreviews.push(...images);
    });
  }
  generateFilePreview(file: File) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = e => {
        const img = new Image();
        img.src = e.target['result'];
        resolve(img);
      };
      fr.onerror = (e: ProgressEvent) => {
        reject(e);
      };
      fr.readAsDataURL(file);
    });
  }
  validateFiles(files: FileList): boolean {
    for (let i = 0; i < files.length; i += 1) {
      console.log(files.item(i).size);
      console.log(this.maxFileSize);
      if (files.item(i).size > this.maxFileSize) {
        return false;
      }
    }
    return true;
  }
}
