import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from 'src/services/get-people-service';
import { Person } from '../models/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  $people: Observable<Person[]>;
  
  constructor(peopleService: PeopleService) {
    this.$people = peopleService.getPeople();
    // this.$people.subscribe((x: Person[]) => console.log(x));
  }

  ngOnInit(): void {
  }

}
