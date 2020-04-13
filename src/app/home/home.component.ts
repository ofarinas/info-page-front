import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {

  }

  download() {
    const doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Test.pdf');
  }

  ngAfterViewInit(): void {
    console.log('view init');
  }

}
