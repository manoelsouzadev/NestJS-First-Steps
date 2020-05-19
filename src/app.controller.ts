import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("cities")
  getAll() {
    return this.appService.getAll();
  }

  @Post("cities")
  save(@Body() city: City) {
    return this.appService.save(city);
  }

  @Put("cities/:id")
  update(@Param("id") id, @Body() city: City) {
    return this.appService.update(id, city);
  }

  @Delete("cities/:id")
  delete(@Param() params) {
    return this.appService.delete(params.id);
  }
}
