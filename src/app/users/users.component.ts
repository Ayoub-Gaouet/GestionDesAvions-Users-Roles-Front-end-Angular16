import {Component, OnInit} from '@angular/core';
import {User} from "../model/user.model";
import {Role} from "../model/role.model";
import {AuthService} from "../services/auth.service";
import {AvionService} from "../services/avion.service";
import {Avion} from "../model/avion.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users? : User[];
  roles?: Role[];
  constructor(public authService: AuthService, private avionService: AvionService) {}

  ngOnInit(): void {
    this.chargerUsers();
  }

  chargerUsers(){
    this.avionService.listeUser().subscribe(us => {
      this.users = us;
    });
  }
  supprimerUser(u: User) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.avionService.supprimerUser(u.user_id!).subscribe(() => {
        console.log("User supprimé");
        this.chargerUsers();
      });
  }

}
