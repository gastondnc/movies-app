import { Component, OnInit } from '@angular/core';

// Impotaciones de desarrollo //
import { CHARACTERS_MOCK } from 'src/app/mocks/characters.mock';
import { Hero, Series, Stories, Story } from 'src/app/models/hero.model';
import { getRandomColor as getHexaColor} from '../../../utils/handler.utils'




// ejemplo de Objeto //
// const heroObj: Hero = {

//   name: '3D Man',
//   series: {
//     available: 88,
//     list: [
//       "Avengers: The Initiative (2007 - 2010)",
//       "Deadpool (1997 - 2002)",
//       "Marvel Premiere (1972 - 1981)"
//     ]
//   },

//   stories: {
//     available: 21,
//     list: [
//       {
//         name: 'Cover #19947',
//         type: 'cover'
//       }
//     ]
//   }


// }


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string = 'About us'
  private heroesRaw: any[] = []
  public heroes: Hero[] = []
  public getRandomColor = getHexaColor

  constructor() { }

  ngOnInit(): void {

    this.heroesRaw = CHARACTERS_MOCK.data.results
    console.log(this.heroesRaw)
    this.buildHeroes()

  }



  public buildHeroes() {

    this.heroesRaw.forEach((hero) => {

      const { name, series, stories } = hero

      const newHero: Hero = {
        name: name,
        series: this.getHeroSeries(series),
        stories: this.getHeroStories(stories)
      }

      // this.heroes.push(newHero)
      this.heroes = [...this.heroes, newHero]
    })
    console.log(this.heroes)

  }


  private getHeroSeries(series: any): Series {

    const newHeroSeries: Series = {
      available: series.available,
      list: []
    }

    series.items.forEach((series: any) => {

      newHeroSeries.list.push(series.name)

    })
    return newHeroSeries
  }

  private getHeroStories(stories: any): Stories {

    const newHeroStories: Stories = {
      available: stories.available,
      list: []
    }
    stories.items.forEach(( story: any ) => {

      const { name, type } = story

      const newStory: Story = {
        name: name,
        type: type
      }

      newHeroStories.list.push(newStory)

    })


    return newHeroStories
  }


}








































