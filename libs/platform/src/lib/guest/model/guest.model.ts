export interface Guest {
  id?: string;
  name: string;
  accepted: boolean;
  needsAccommodation: boolean;
  vegetarien: boolean;
  vegan: boolean;
  lactoseIntolerant: boolean;
  eatsPork: boolean;
  song: string;
  comment: string;
}
