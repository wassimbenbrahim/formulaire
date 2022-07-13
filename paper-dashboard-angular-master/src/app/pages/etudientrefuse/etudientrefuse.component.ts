import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inscription } from 'app/models/Inscription';
import { InscriptionService } from 'app/services/inscription.service';

@Component({
  selector: 'app-etudientrefuse',
  templateUrl: './etudientrefuse.component.html',
  styleUrls: ['./etudientrefuse.component.scss']
})
export class EtudientrefuseComponent implements OnInit {
  listetud: Inscription[];
  term: any;
  constructor(private router: Router, private _service: InscriptionService) { }

  ngOnInit(): void {
    this._service.listerefuse().subscribe(res => {
      console.log(res);
      this.listetud = res;
    });
  }

}
