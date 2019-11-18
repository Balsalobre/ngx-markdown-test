import { Component, OnInit } from '@angular/core';
import { UppercasePipe } from 'src/app/pipes/uppercase.pipe';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.scss'],
  providers: [UppercasePipe]
})
export class TestPipesComponent implements OnInit {

  public testNumber = 32342.348;
  public lista = [
    {id: 1, nombre:'Pacific Rim: Insurrección', precio: 6.80},
    {id: 2, nombre:'Black Panther', precio: 5.95},
    {id: 3, nombre:'El corredor del laberinto: La cura mortal', precio: 4.10},
    {id: 4, nombre:'Ready Player One', precio: 8.70},
    {id: 5, nombre:'Vengadores: Infinity War', precio: 7.40},
    {id: 6, nombre:'Deadpool 2', precio: 6.10},
    {id: 7, nombre:'Los Increíbles', precio: 5.70},
    {id: 8, nombre:'Hotel Transilvania 3: Unas vacaciones monstruosas', precio: 4.70},
  ];

  public dateList = [
    {
      CREATE_TS: "2018-08-15 17:17:30.0",
      Key1: "Val1"
    },
    {
      CREATE_TS: "2018-08-15 17:25:30.0",
      Key1: "Val2"
    },
    {
      CREATE_TS: "2018-08-15 17:28:30.0",
      Key1: "Val3",
    },
    {
      CREATE_TS: "2018-08-13 17:28:30.0",
      Key1: "Val4",
    },
    {
      CREATE_TS: "2019-08-15 17:28:30.0",
      Key1: "Val6",
    }

  ];

  constructor(private _uppercasePipe: UppercasePipe) { }

  ngOnInit() {
    console.log(this._uppercasePipe.transform(this.lista[0].nombre));
  }

}
