import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  private cities: City[] = [];
  private id: number = 0;

  getHello(): string {
    return "Hello World!";
  }

  getAll() {
    return this.cities;
  }

  save(city: City) {
    city.id = this.id += 1;
    this.cities.push(city);
    return this.cities;
  }

  update(id, city: City) {
    this.cities.map((el) => {
      if (el.id == parseInt(id)) {
        this.cities[id - 1].name = city.name;
        this.cities[id - 1].country = city.country;
      }
    });
    return this.cities;
  }

  delete(id) {
    this.cities = this.cities.filter((el) => {
      return el.id !== parseInt(id);
    });
    return this.cities;
  }
}
