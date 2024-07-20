export interface IChoice {
  title: string;
  go: number // go to scene_id
  isAlone?: boolean
  sunflower?: number
  roses?: number
  lavender?: number
  lilly?: number
  forgetmenot?: number
  dog? : number
  cat? : number

}

export interface IStory {
  scene_id: number;
  title?: string | null;
  story?: string | null;
  choice?: IChoice[] | null;
  poster?: string;
  background?: string;
  go?: number | null; // go to scene_id
  children?: React.ReactNode
  backToIndex?: number | null
}