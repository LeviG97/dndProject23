import { Component } from '@angular/core';
import { Monster } from './Monster';
import { MonsterService } from './monster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dndProject';
  monsterData!: Monster;
  errorMessage: any;

  constructor(private _monster:MonsterService){}

  getMonsterDetails(monsterName:string): boolean{
    this._monster.getMonsterDetails(monsterName).subscribe(
      monsterData => {
        this.monsterData = monsterData;
      console.log("Monster name :" + this.monsterData.name);
      }
    )
    return false;
  }
}
