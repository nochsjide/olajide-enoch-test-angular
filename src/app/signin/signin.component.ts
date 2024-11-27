import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  
  public email=''
  public password=''
 
  public users:any = []
  public msg=''
  ngOnInit()
  {
    
    const storedUsers= JSON.parse(localStorage.getItem('usersarray')!)
    this.users = storedUsers 

  }
  constructor(public router:Router){}
 

signin()
{
  console.log(this.users)
  const existingUser = this.users.find((user: any) => user.email == this.email && user.password == this.password);
  if(existingUser)
  {
      localStorage.setItem('currentuser',JSON.stringify(existingUser))
      console.log(existingUser)
      this.router.navigate(['dashboard'])
  }
  else
  {
    this.msg ="Invalid Email or password"
  }
}

}   
