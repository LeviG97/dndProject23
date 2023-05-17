import { Component } from '@angular/core';
import { MonsterService } from '../monster.service';
import { Monster } from '../Monster';

@Component({
  selector: 'app-monster-search',
  templateUrl: './monster-search.component.html',
  styleUrls: ['./monster-search.component.css']
})
export class MonsterSearchComponent {
  challengeRating!: number;
  monsters: any[] | undefined;
  selectedMonster: Monster | undefined;

  constructor(private monsterService: MonsterService) {}

  searchMonsters() {
    this.monsterService.searchMonsters(this.challengeRating)
      .subscribe((data: any) => {
        this.monsters = data.results;
      });
  }

  getMonsterDetails(url: string) {
    this.monsterService.getMonsterDetails(url)
      .subscribe((monster: Monster) => {
        this.selectedMonster = monster;
      });
  }
}
