import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';


@Injectable()
export class PokeapiService {
  constructor(private readonly httpService: HttpService) {}

  async getPokemonData(pokemonName: string): Promise<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    try {
      const response: AxiosResponse<any> = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch data from PokeAPI', HttpStatus.BAD_REQUEST);
    }
  }
}