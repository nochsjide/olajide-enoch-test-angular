import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public firstname =''
  public lastname =''
  public email=''
  public password=''
  public phonenumber=''
  public age=''
  public nname=''
  public npnumber=''
  public users:any = []
  public msg=''
  public accountype=''
  
ngOnInit()
{
  localStorage.setItem('usersarray','[]');
  const storedUsers= JSON.parse(localStorage.getItem('userarray')!)
  this.users = storedUsers ? JSON.parse(localStorage.getItem('userarray')!):[]

}
  signup()
  {
   
      const existingUser = this.users.find((user: any) => user.email === this.email);
      if(existingUser)
      {
        this.msg='Email already exists'
      }
      
      else
      {
          let user=
          {
            firstname :this.firstname,
            lastname :this.lastname,
            email:this.email,
            password:this.password,
            phonenumber:this.phonenumber,
            age:this.age,
            nname:this.nname,
            npnumber:this.npnumber,
            user_id:"US" + Math.random(),
            accountnumber:Math.random()*10,
            accountype:this.accountype,
            balance:0.00


          }
          this.users.push(user)
          console.log(user)
          localStorage.setItem('usersarray',JSON.stringify(this.users))
          console.log(this.users)

      }

      
  }


}
