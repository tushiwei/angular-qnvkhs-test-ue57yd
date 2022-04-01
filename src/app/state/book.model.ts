export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    autoors: Array<string>;
  }
}