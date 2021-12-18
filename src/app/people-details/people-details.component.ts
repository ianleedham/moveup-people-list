import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/services/get-people-service';
import { Person } from '../models/person';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  id: any;
  person: Person|undefined;

  constructor(private activatedRoute: ActivatedRoute, peopleService: PeopleService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const $people = peopleService.getPeople();
    $people.subscribe(people => {
      this.person = people.find(x => x._id == this.id);
    })
  }

  ngOnInit(): void {
  }

}
