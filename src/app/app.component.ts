import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import pokemons from '../data/pokemons.json';
import { StoreComponent } from './components/store/store.component';
import { FilterComponent } from './components/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, StoreComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pokemons = pokemons;
  POKEMON_DESCRIPTION =
    'Descripción: Este componente muestra una lista de tarjetas de Pokémon. El usuario puede filtrar la lista seleccionando un tipo de Pokémon en el selector en la parte superior. La lista se actualizará automáticamente para mostrar solo los Pokémon que tienen el tipo seleccionado.';
  ngOnInit() {
    console.log(pokemons);
  }
}
