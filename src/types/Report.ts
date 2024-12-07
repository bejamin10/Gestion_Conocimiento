export interface Report {
  id: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  incidentDate: string;
  reportDate: string;
  reporter: {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
  };
  status: 'pending' | 'investigating' | 'resolved';
}