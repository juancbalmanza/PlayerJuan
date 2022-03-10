import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vista-datos',
  templateUrl: './vista-datos.component.html',
  styleUrls: ['./vista-datos.component.scss']
})
export class VistaDatosComponent implements OnInit {

  @Input() dato: any;
  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModal(modal: any): void {
    this.modal.open(modal, {centered: true});
  }

}
