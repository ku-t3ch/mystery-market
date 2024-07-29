export interface IChoice {
  title: string;
  go: number; // go to scene_id
  isAlone?: boolean;
  firstFlower?: string;
  sunflower?: number;
  roses?: number;
  lavender?: number;
  lilly?: number;
  forgetmenot?: number;
  selectedAnimal?: boolean;
  dog?: boolean;
  cat?: boolean;
  reality?: boolean;
}

export interface IStory {
  scene_id: number;
  title?: string | null;
  story?: string | null;
  choice?: IChoice[] | null;
  poster?: string;
  background?: string;
  go?: number | null; // go to scene_id
  children?: React.ReactNode;
  backToIndex?: number | null;
}

export interface IStateKeep {
  scene_id: number;
  getName: string;
  isAlone: boolean;
  sunflower: number;
  roses: number;
  lavender: number;
  lilly: number;
  forgetmenot: number;
  dog: boolean;
  cat: boolean;
  selectedAnimal: boolean;
  firstFlower: string;
  reality: boolean;
}
