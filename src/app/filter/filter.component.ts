import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import pokemons from '../../data/pokemons.json';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image_url: string;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  pokemons: Pokemon[] = pokemons;
  pokemonTypes: string[] = [];
  selectedType: string = '';
  filteredPokemons: Pokemon[] = [];

  constructor() {
    this.extractPokemonTypes();
    this.filteredPokemons = this.pokemons;
  }

  extractPokemonTypes() {
    this.pokemons.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        if (!this.pokemonTypes.includes(type)) {
          this.pokemonTypes.push(type);
        }
      });
    });
  }

  onSelectType(event: Event) {
    const selectedType = (event.target as HTMLSelectElement).value;
    this.selectedType = selectedType;
    this.filterPokemonsByType();
  }

  filterPokemonsByType(): void {
    if (this.selectedType === '') {
      this.filteredPokemons = this.pokemons;
    } else {
      this.filteredPokemons = this.pokemons.filter((pokemon) =>
        pokemon.types.includes(this.selectedType)
      );
    }
  }
}
