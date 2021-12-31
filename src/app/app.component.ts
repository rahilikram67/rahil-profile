import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personal = [
    {
      value: "Rahil Ikram",
      title: "Name"
    },
    {
      value: "rahil.ikram67@gmail.com",
      title: "Email"
    },
    {
      value: "+92-3119074784",
      title: "Phone"
    },
    {
      value: "Gujranwala, Pakistan",
      title: "Address"
    },
    {
      value: "Pakistan",
      title: "Country"
    },
    {
      value: "Freelancer and Developer",
      title: "Occupation"
    }
  ]
  skills = [
    "assets/skills/angular.svg",
    "assets/skills/react.svg",
    "assets/skills/nodejs.svg",
    "assets/skills/mongodb.svg",
    "assets/skills/ionic.svg",
    "assets/skills/capacitor.svg",
  ]
  btns: HTMLButtonElement[] = []
  colors: any = {
    angular: "#E23237",
    react: "#53C1DE",
    nodejs: "#37474F",
    mongodb: "#6CAC48",
    ionic: "#4E8EF7",
    capacitor: "#53B9FF"
  }
  exps = {
    angular: 75,
    react: 53,
    nodejs: 80,
    mongodb: 45,
    ionic: 60,
    capacitor: 30
  }
  exp_points = 0
  contact = [
    {
      url: "https://www.facebook.com/profile.php?id=100019408902525",
      icon: "assets/contact/facebook.png"
    },
    {
      url: "https://www.instagram.com/m.rahil.ikram/",
      icon: "assets/contact/instagram.png"
    },
    {
      url: "https://twitter.com/RahilIkram67",
      icon: "assets/contact/twitter.png"
    },
    {
      url: "https://discordapp.com/users/924923997861330976",
      icon: "assets/contact/discord.png"
    }
  ]
  constructor() {
    this.exp_points = this.exps.angular
  }

  ngAfterViewInit() {
    let str = ''
    for (let el of this.skills) {
      str += `#${el.split("/").slice(-1)[0].split('.')[0]}, `
    }
    str = str.replace(/,\s*$/, "")
    this.btns = Array.from(document.querySelectorAll(str))
    this.btns[0].style.border = "2px solid " + this.colors.angular
  }
  swipeTo(id: string) {
    let el = document.getElementById(id)
    el.scrollIntoView({
      behavior: "smooth",
      block:"center"
    })
  }
  share() {
    if (navigator.share) {
      navigator.share({
        title: "Rahil Ikram",
        text: "I am a Full Stack Developer and a Muslim. I am a Freelancer and a Developer. I am an ambitious and a progressive person. I am a Pakistani.",
        url: "https://rahil-profile.web.app/"
      })
    }
  }
  colorBorder(id: string) {
    for (let el of this.btns) {
      if (el.id != id) el.style.border = "0px dotted transparent"
      else el.style.border = "2px solid " + this.colors[id]
    }
    this.exp_points = 0
    let interval = setInterval(() => {
      if (this.exp_points >= this.exps[id]) {
        clearInterval(interval)
        return
      }
      this.exp_points += 1
    }, 30)
  }
  actualId(str: string) {
    return str.split('/').slice(-1)[0].split('.')[0]
  }
}
