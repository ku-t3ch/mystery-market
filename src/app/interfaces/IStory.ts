export interface IChoice {
  title: string;
  go: number // go to scene_id
}
export interface IStory {
  scene_id: number;
  title?: string | null;
  story?: string | null;
  choice?: IChoice[] | null;
  poster?: string;
  background: string;
  go: number | null; // go to scene_id
  children?: React.ReactNode
  backToIndex?: number | null
}