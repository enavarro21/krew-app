import { Component } from '@angular/core';

@Component({
  selector: 'app-bet-create',
  templateUrl: './bet-create.component.html',
  styleUrls: ['./bet-create.component.css']
})
export class BetCreateComponent {
  newBet = '';

  onAddBet() {
  this.newBet = 'The user\'s bet';
  }
}
