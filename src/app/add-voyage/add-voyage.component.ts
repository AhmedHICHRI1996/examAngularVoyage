import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VoyageService } from '../voyage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Voyage } from '../models/voyage';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent {

  constructor(private vS: VoyageService,
    private ac: ActivatedRoute,
  private r:Router) {}

  voyage = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    depart: new FormControl('',[
      Validators.required,
      Validators.pattern("^Vdepart.*"),
    ]),
    arrive: new FormControl(''),
    nb_place: new FormControl(),
    nb_view: new FormControl()
  });

  get description() {
    return this.voyage.get('description');
  }

  get depart() {
    return this.voyage.get('depart');
  }



    addVoyage() {
      this.voyage.value.nb_view = '0';
      this.vS.addVoyage(this.voyage.value as Voyage).subscribe(
        ()=>{
          this.r.navigate(['/list'])
        }
      )
    
    }

}
