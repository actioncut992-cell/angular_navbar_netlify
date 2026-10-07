import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  @ViewChild('backgroundVideo')
  backgroundVideo?: ElementRef<HTMLVideoElement>;

  playBackgroundVideo(): void {
    const video = this.backgroundVideo?.nativeElement;

    if (video && video.paused) {
      video.play();
    }
  }
}