export interface IStory {
  scene_id: number;
  title: string | null;
  story: string | null;
  choice: string[] | null;
  background: string;
}
