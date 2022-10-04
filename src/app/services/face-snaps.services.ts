import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
      createdDate: new Date(),
      snaps: 201,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Test 2',
      description: 'Je suis le test 1',
      imageUrl:
        'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
      createdDate: new Date(),
      snaps: 50,
      location: 'je sais pas vraiment où',
    },
    {
      id: 3,
      title: 'Test 3',
      description: 'Je suis le test 3',
      imageUrl:
        'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
      createdDate: new Date(),
      snaps: 150,
    },
    {
      id: 4,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
      createdDate: new Date(),
      snaps: 201,
      location: 'Paris',
    },
    {
      id: 5,
      title: 'Test 2',
      description: 'Je suis le test 1',
      imageUrl:
        'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
      createdDate: new Date(),
      snaps: 50,
      location: 'je sais pas vraiment où',
    },
    {
      id: 6,
      title: 'Test 3',
      description: 'Je suis le test 3',
      imageUrl:
        'https://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1543416082065',
      createdDate: new Date(),
      snaps: 150,
    },
  ];

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
