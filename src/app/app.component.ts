import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Mata Kuliah', url: '/matakuliah', icon: 'file-tray-full' },
    { title: 'Jadwal', url: '/jadwal', icon: 'calendar' },
    { title: 'Nilai', url: '/nilai', icon: 'stats-chart' },
    { title: 'Kartu Rencana Studi', url: '/krs', icon: 'journal' },
    { title: 'Keuangan', url: '/keuangan', icon: 'receipt' },
  ];
  constructor() {}
}
