type TSTask = {
  id: number;
  title: string;
  description: string;
  portraitImage: string;
  images: string[];
  state: 'open' | 'closed';
};
