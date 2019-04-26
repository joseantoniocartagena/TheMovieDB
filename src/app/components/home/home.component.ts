import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private status: boolean;
  nuevasPeliculas: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;
    this.status = true;
    this.moviedb.getDiscoverMovies()
      .subscribe((data: any) => {

        console.log(data);
        this.nuevasPeliculas = data;
        this.loading = false;
      });

  }

  callMovies(status: boolean) {
    if ((status == true) && (this.status == false)) {
      this.status = true;
      this.moviedb.getTopMovies()
        .subscribe((data: any) => {
          console.log(data);
          this.nuevasPeliculas = data;
        });
    } else if ((status == false) && (this.status == true)) {
      this.status = false;
      this.moviedb.getDiscoverMovies()
        .subscribe((data: any) => {

          console.log(data);
          this.nuevasPeliculas = data;
          this.loading = false;
        });
    }
  }

}
