import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  videoUrl = 'https://youtu.be/tYa6OLQHrEc';
  videoSource = "https://youtu.be/tYa6OLQHrEc";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
