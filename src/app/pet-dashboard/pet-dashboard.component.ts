import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-dashboard',
  templateUrl: './pet-dashboard.component.html',
  styleUrls: ['./pet-dashboard.component.css']
})
export class PetDashboardComponent implements OnInit {

  showDogs:boolean;
  dogs: string[];
  cats: string[];
  constructor() { 
    this.showDogs=true; //default to sow dog list
    this.dogs=['Stark','Bella','Zeus','Zoey','Toby','Scout'];
    this.cats=['Olive','Momo','Merrel','Bird','Tiny'];
  }

  ngOnInit() {
  }

  addPet(myPetName){
    if(this.showDogs===true){
      this.dogs.push(myPetName);
    }else{
      this.cats.push(myPetName)
    }
    
  }
  togglePetType(showDogs){
    this.showDogs=showDogs;
    
  }

}
