import { Component, ViewChild } from '@angular/core';
import { IOverlayDisplay } from '../models/IOverlayDisplay';
import { OverlayPDFBottomComponent } from '../overlay-pdf-bottom/overlay-pdf-bottom.component';

@Component({
  selector: 'app-tab-book',
  templateUrl: 'tab-book.page.html',
  styleUrls: ['tab-book.page.scss']
})
export class TabBookPage {
  @ViewChild('chaptersOverlay') chaptersOverlay: OverlayPDFBottomComponent;

  pdf: string = "../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf";
  page: number = 1;
  pinchZoom: boolean = false;

  book: any = {
    chapters: [
      {
        id: 'Cap. 1',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 10
      },
      {
        id: 'Cap. 2',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 13
      },
      {
        id: 'Cap. 3',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 17
      },
      {
        id: 'Cap. 4',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 21
      },
      {
        id: 'Cap. 5',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 27
      },
      {
        id: 'Cap. 6',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 32
      },
      {
        id: 'Cap. 7',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 34
      },
      {
        id: 'Cap. 8',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 36
      },
      {
        id: 'Cap. 9',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 54
      },
      {
        id: 'Cap. 10',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 55
      },
      {
        id: 'Cap. 11',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 58
      },
      {
        id: 'Cap. 12',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 62
      },
      {
        id: 'Cap. 13',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 64
      },
      {
        id: 'Cap. 14',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 68
      },
      {
        id: 'Cap. 15',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 73
      },
      {
        id: 'Cap. 16',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 75
      },
      {
        id: 'Cap. 17',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 77
      },
      {
        id: 'Cap. 18',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 80
      },
      {
        id: 'Cap. 19',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 84
      },
      {
        id: 'Cap. 20',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 86
      },
      {
        id: 'Cap. 21',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 88
      },
      {
        id: 'Cap. 22',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 89
      },
      {
        id: 'Cap. 23',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 91
      },
      {
        id: 'Cap. 24',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 94
      },
      {
        id: 'Cap. 25',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 95
      },
      {
        id: 'Cap. 26',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 98
      },
      {
        id: 'Cap. 27',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 102
      },
      {
        id: 'Cap. 28',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 106
      },
      {
        id: 'Cap. 29',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 109
      },
      {
        id: 'Cap. 30',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 111
      },
      {
        id: 'Cap. 31',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 113
      },
      {
        id: 'Cap. 32',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 115
      },
      {
        id: 'Cap. 33',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 118
      },
      {
        id: 'Cap. 34',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 119
      },
      {
        id: 'Cap. 35',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 123
      },
      {
        id: 'Cap. 36',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 126
      },
      {
        id: 'Cap. 37',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 129
      },
      {
        id: 'Cap. 38',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 130
      },
      {
        id: 'Cap. 39',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 133
      },
      {
        id: 'Cap. 40',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 135
      },
      {
        id: 'Cap. 41',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 137
      },
      {
        id: 'Cap. 42',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 138
      },
      {
        id: 'Cap. 43',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 145
      },
      {
        id: 'Cap. 44',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 146
      },
      {
        id: 'Cap. 45',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 147
      },
      {
        id: 'Cap. 46',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 149
      },
      {
        id: 'Cap. 47',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 154
      },
      {
        id: 'Cap. 48',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 158
      },
      {
        id: 'Cap. 49',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 161
      },
      {
        id: 'Cap. 50',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 169
      },
      {
        id: 'Cap. 51',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 170
      },
      {
        id: 'Cap. 52',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 171
      },
      {
        id: 'Cap. 53',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 172
      },
      {
        id: 'Cap. 54',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 174
      },
      {
        id: 'Cap. 55',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 177
      },
      {
        id: 'Cap. 56',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 181
      },
      {
        id: 'Cap. 57',
        pdf: '../../assets/pdf/DotNETFrameworkNotesForProfessionals.pdf',
        page: 184
      }
    ],
    name: 'Escolher capítulo',
    icon: '/assets/images/dotNetFrameworkNotesForProfessionals.png'
  };
  chapter: any;
  chapters: Array<IOverlayDisplay> = [];
  theme: string;

  constructor() {}

  getChaptersOverlay() {
    this.chapters = [];
    if (this.book?.chapters == null) {
      return this.chapters;
    }

    let i = 0;

    this.book?.chapters.forEach((chapter) => {
      this.chapters.push({
        mainLabel: chapter.id,
        index: i++,
        image: this.book.icon
      });
    });

    this.theme = this.book.name;

    return this.chapters;
  }

  selectChapterByIndex(index: number) {
    const id = this.chapters[index].mainLabel;
    this.chapter = this.book?.chapters.find(prop => prop.id === id);
    console.log(this.chapter);

    if (this.chapter.pdf !== this.pdf) {
      this.pdf = this.chapter.pdf;
    }

    if (this.chapter.page !== this.page) {
      this.page = this.chapter.page;
    }

    this.chaptersOverlay.toggle();
  }

  toogleChaptersOverlay() {
    this.chaptersOverlay.toggle();
  }
}
