import { Component } from '@angular/core';
import {AvionService} from "../services/avion.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  user: User = new User(); // Initialize a new user object
  successMessage: string = '';

  constructor(private avionService: AvionService) {

  }

  ngOnInit(): void {
  }
  addUser() {
    this.avionService.saveUser(this.user).subscribe(
      (savedUser: User) => {
        console.log('User added:', savedUser);
        this.successMessage = 'User registered successfully';
        this.user = new User(); // Réinitialise le formulaire
      },
      (error) => {
        this.successMessage = 'User registered failed';
        console.error('Error adding user:', error);
      }
    );
  }
}
