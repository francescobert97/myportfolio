import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tech-stack',
  template: `
    <div class="container-stack d-flex justify-content-center align-items-center">

      <h2 class="mt-3">Il mio stack tecnologico</h2>

      <div class="contain-scale-effect">

        <div *ngFor="let tecnologie of tecnologies; let idx = index" class="single-tecnologie-card" [ngClass]="{'icon-scale-effect' : tecnologie.animation, 'tech-description-visible' : tecnologies[idx].showDescription}" (click)="info(idx)">
            <img src="{{tecnologie.icon}}" alt="una delle tecnologie che utilizzo.">
            <div class="tecnologie-info" *ngIf="tecnologies[idx].showDescription">
              <h2>{{tecnologie.name}}</h2>
              <p>{{tecnologie.description}}</p>
            </div>
        </div>

      </div>

    </div>
  `,
  styles: [
    `
    .container-stack {
      position:relative;
      margin: 10rem 0;
      padding: 2rem;
      height: 50%;

      h2 {
        font-size: 1.7em;
        text-shadow: -3px -1px 21px rgba(108, 255, 215, 1);
      }

      .contain-scale-effect {
       
        position: absolute;
        top: 2%;
        left: -14%;
        width: 33rem;
        height: 20rem;
        transition: 22s;
     
        div:nth-child(1) {
          top: 85%;
          left: 30%;
        }

        div:nth-child(2) {
          left: 27%;
          top: -45%;
        }

        div:nth-child(3) {
          left: -15%;
          top: -12%;
        }

        div:nth-child(4) {
          left: 78%;
          top: -11%;
        }

        div:nth-child(5) {
          left: 78%;
          top: 47%;
        }

        div:last-child {
          left: -15%;
          top: 47%;
        }

      .single-tecnologie-card {
        position: absolute;
        transition: 3s;
          img {
            width: 8.5rem;
            height: 8.5rem;
          }

          .tecnologie-info {
            position:absolute;
            top: 50%;
            left: 50%;
            background: black;
            padding: 1rem;
            box-shadow: 0px 0px 32px -4px #37DBD6;
          }

        }

      }

    }

    .icon-scale-effect {
      transform: scale(1.3);
    }

    .tech-description-visible {
      z-index: 10000;
    }


    @media screen and (max-width: 856px) {
      .container-stack {
        h2 {
          font-size: 1.9em;
        }
        .contain-scale-effect {
      
          .single-tecnologie-card {
            img {
              width: 8.2rem;
              height: 8.2rem;
            }

            .tecnologie-info {
              width: 6rem;
              font-size: 0.5em;
              top: 50%;
              left: 0;
            }
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      .container-stack {
        h2 {
          font-size: 1.5em;
        }
        .contain-scale-effect {
          width: 19rem;
          height: 14rem;
          top: 20%;
          left: 5%;

          .single-tecnologie-card {
            img {
              width: 4.5rem;
              height: 4.5rem;
            }

            .tecnologie-info {
              width: 6rem;
              font-size: 0.5em;
              top: 50%;
              left: 0;
            }
          }
        }
      }
    }

    @media screen and (max-width: 356px) {
      .container-stack {
        h2 {
          font-size: 0.9em;
        }
        .contain-scale-effect {
          width: 15rem;
          height: 11rem;
          top: 20%;
          left: -3%;

          .single-tecnologie-card {
            img {
              width: 5rem;
              height: 5rem;
            }

            .tecnologie-info {
              width: 6rem;
              font-size: 0.5em;
              top: 50%;
              left: 0;
            }
          }
        }
      }
    }
    `
  ]
})
export class TechStackComponent implements OnInit {
  tecnologies:any[] = [
    {
      id: 0,
      name: 'Angular',
      icon: '../../../../assets/icons/angular-icon.svg',
      description: ' è un framework open source per lo sviluppo di applicazioni web', 
      animation: false,
      time: 500,
      showDescription: false
    },
    {
      id: 1,
      name: 'Rxjs',
      icon: '../../../../assets/icons/rxjs-icon.png',
      description: ' è un framework open source per lo sviluppo di applicazioni web',
      animation: false,
      time: 1000,
      showDescription: false
    },
    {
      id: 2,
      name: 'Typescript',
      icon: '../../../../assets/icons/typescript-icon.png',
      description: ' è un framework open source per lo sviluppo di applicazioni web',
      animation: false,
      time: 1500,
      showDescription: false
    },
    {
      id: 3,
      name: 'Javascript',
      icon: '../../../../assets/icons/javascript-icon.png',
      description: ' è un framework open source per lo sviluppo di applicazioni web',
      animation: false,
      time: 2000,
      showDescription: false
    },
    {
      id: 4,
      name: 'CSS3',
      icon: '../../../../assets/icons/css-icon.png',
      description: ' è un framework open source per lo sviluppo di applicazioni web',
      animation: false,
      time: 2500,
      showDescription: false
    },
    {
      id: 5,
      name: 'HTML5',
      icon: '../../../../assets/icons/html-icon.png',
      description: ' è un framework open source per lo sviluppo di applicazioni web',
      animation: false,
      time: 3000,
      showDescription: false
    },
  ]
  public readonly showInfo: {[key: number]: boolean} = {};
  

  
  constructor() { }

  ngOnInit(): void {
    this.getScaleAnimation();
  }

  private intervalFn(tecnologie:any, time:number) {
    const found = this.tecnologies.find(tcnlg =>  tcnlg.id === tecnologie.id);
    const foundIdx = this.tecnologies.findIndex(tcnlg =>  tcnlg.id === tecnologie.id);

    setInterval(() => {
      this.tecnologies[foundIdx].animation = !this.tecnologies[foundIdx].animation
    }, time);
  }

  getScaleAnimation() {
    for(let tecnologie of this.tecnologies) {

       this.intervalFn(tecnologie, tecnologie.time);
    }
  }

  info(idx:number) {

    this.tecnologies[idx].showDescription = !this.tecnologies[idx].showDescription;
 
      this.tecnologies.forEach((element, index) => {

        if(this.tecnologies[idx] !== this.tecnologies[index]) {
          this.tecnologies[index].showDescription = false;
          
        } else {
          const descr = this.tecnologies[idx].showDescription;
          if(this.tecnologies[idx].showDescription  === descr) {
            this.tecnologies[index].showDescription = false;
          }
          this.tecnologies[index].showDescription = true;
        
        }
        
      }) 

  }

}
