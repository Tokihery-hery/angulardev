import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { Item, mimeType } from '../upload-file-img/model'
// import { fchmod, readFile, writeFile } from 'fs'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { EmoraServiceService } from '../services/emora-service.service';

@Component({
  selector: 'app-upload-file-img',
  templateUrl: './upload-file-img.component.html',
  styleUrls: ['./upload-file-img.component.css']
})
export class UploadFileImgComponent implements OnInit {
  item: any = {
    id: "",
    name: "",
    imagePath: ""
  }

form: FormGroup |any
  imagePreview: string = "";
  private id: string | undefined;

  loading = false;
  filedata = ""
  imageSrc =""
  myForm :any
  submitted:Boolean | undefined
  constructor(public EmoraService: EmoraServiceService, public route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  onFileChange(event:any) {

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
        const file = event.target.files[0];
        this.filedata = event.target.files[0];

        reader.readAsDataURL(file);

        reader.onload = () => {

            this.imageSrc = reader.result as string;
            console.log(reader.result);
            // this.myForm.patchValue({
            //     add1: reader.result
            // });

        };

    } 
  }
  storeBook(){
        this.myForm.patchValue({
            image: this.filedata
        })
        console.log(this.myForm);

        this.EmoraService.createImg(this.myForm.value)
            .subscribe(
                response => {
                    this.submitted = true;

                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }
  }

