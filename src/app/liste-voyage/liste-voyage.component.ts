import { Component } from '@angular/core';
import { Voyage } from '../models/voyage';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-liste-voyage',
  templateUrl: './liste-voyage.component.html',
  styleUrls: ['./liste-voyage.component.css']
})
export class ListeVoyageComponent {
  voyage: Voyage[] = [];
  
  constructor(private ac: ActivatedRoute, private vS: VoyageService, private r : Router) {
    this.vS.getVoyages().subscribe({
        next : (data) => this.voyage = data as Voyage[]
    })
  }

  // listProjects: Project[] = [];
  // constructor(private pS:ProjectsService,private r : Router){
  //   this.pS.getProjects().subscribe({
  //     next: (data) => this.listProjects = data as Project[],
  //     error : (err)=> console.log(err)
  //   })
  // }


}
