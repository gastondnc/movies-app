export interface Hero {
  name: string;
  series: Series;
  stories: Stories;
}

export type Series = {
  available: number;
  list: string[]
}

export type Stories = {
  available: number;
  list: Story[]
}

export type Story= {
  name: string;
  type: string;
}
