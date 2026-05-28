export interface GuestRSVP {
  id: string;
  name: string;
  attending: boolean;
  count: number;
  wishes: string;
  phone?: string;
  timestamp: number;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
}
