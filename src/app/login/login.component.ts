import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onUsernameChanged(e: any) {
    this.user.username = e.target.value;
  }

  onPasswordChanged(e: any) {
    this.user.password = e.target.value;
  }

  onLogin() {
    this.api.login(this.user)
      .subscribe((res: any) => {
        this.router.navigate(["/"]);
    }, err => {
      console.log(err);
    });
  }
}
