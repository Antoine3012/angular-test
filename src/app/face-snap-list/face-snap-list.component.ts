import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor() {}

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl:
          'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
        createdDate: new Date(),
        snaps: 201,
        location: 'Paris',
      },
      {
        title: 'Test 2',
        description: 'Je suis le test 1',
        imageUrl:
          'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
        createdDate: new Date(),
        snaps: 50,
        location: 'je sais pas vraiment où',
      },
      {
        title: 'Test 3',
        description: 'Je suis le test 3',
        imageUrl:
          'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
        createdDate: new Date(),
        snaps: 150,
      },
    ];
  }
}
