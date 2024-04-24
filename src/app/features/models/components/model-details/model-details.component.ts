import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ModelDetailsDto } from '../../models/model-details-dto';
import { ModelsApiService } from '../../services/modelsApi.service';
import { VatAddPipe } from "../../../../core/pipes/vat-add.pipe";

@Component({
    selector: 'app-model-details',
    standalone: true,
    templateUrl: './model-details.component.html',
    styleUrl: './model-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        VatAddPipe
    ]
})
export class ModelDetailsComponent {

  //tarih pipe
  //upper-lower pipe

  @Input()  id!: number;
  modelDetails !: ModelDetailsDto;

  //dateNow : Date = new Date();
  //uppercaseBrandName: string = '';
  //lowercaseModelName: string = '';
  //formatText: any;

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}


  ngOnInit() :void {
    this.getModelDetails();
    //this.formatText();
  }
  getModelDetails() {
    this.modelsApiService.getById(this.id).subscribe({
      next: (modelDetails) => {
        this.modelDetails = modelDetails;
      },
      complete: () => {
        this.change.markForCheck();
      }


      //get dateNow() {
       // return new Date();
      //}

    });
  }
}

  //upper-lower
 // formatText() {
   // this.uppercaseBrandName = this.modelDetails.brand.name.toUpperCase();
  //  this.lowercaseModelName = this.modelDetails.name.toLowerCase();
  //}
//}

//@NgModule({
  //declarations: [ModelDetailsComponent, VatAddPipe],
  //imports: [CommonModule],
 // exports: [ModelDetailsComponent]
//})
//export class ModelDetailsModule {}
