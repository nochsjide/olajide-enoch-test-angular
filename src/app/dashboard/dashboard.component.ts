import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
public user:any = []
ngOnInit()
{
  this.user = JSON.parse(localStorage.getItem('currentuser')!)
}
}
