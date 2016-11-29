import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <list [list]="people"></list>
    <div>
      <h3>New person</h3>
      <input #newPerson type="text">
      <button (click)="add(newPerson.value)">Add</button>
    </div>
    <div>
      <h3>Edit at index</h3>
      <input #editPersonIndex type="number">
      <input #editPerson type="text">
      <button (click)="edit(editPersonIndex.value, editPerson.value)">Edit</button>
    </div>
    <div>
      <h3>Clear</h3>
      <button (click)="clear()">Clear</button>
    </div>
  `
})
export class AppComponent {
  people: string[] = ['Andreas', 'Gion'];

  add(name: string) {
    this.people.push(name);
  }

  clear() {
    this.people.length = 0;
  }

  edit(index: string, name: string) {
    this.people[index] = name;
  }
}
