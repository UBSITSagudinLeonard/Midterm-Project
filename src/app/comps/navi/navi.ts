import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [Navi, RouterLink],
  templateUrl: './navi.html',
  styleUrl: './navi.css',
})
export class Navi {}
