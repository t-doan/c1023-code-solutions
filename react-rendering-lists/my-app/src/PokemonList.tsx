type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  list: Pokemon[];
};

export function PokemonList({ list }: Props) {
  const items = list.map((p) => (
    <li key={p.number}>
      {p.number} - {p.name}
    </li>
  ));

  return <ul>{items}</ul>;
}
