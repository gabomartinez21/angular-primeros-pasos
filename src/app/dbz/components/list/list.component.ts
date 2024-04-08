import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent { 

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 2000
  }]; 
  
  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    // TODO emitir el id del personnaje
    if( !id) return;
    this.onDeleteId.emit(id);
  }
}
