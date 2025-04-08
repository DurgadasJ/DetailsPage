import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  fname: string = ""; 
  name: String = "Durgadas Joshi";
  experience: number = 5; 
  isDisabled: boolean = false;
  activeTab: string = 'intro';

  goToIntroduction(){
    this.isDisabled = true;
  }
}
