export interface Route {
  title: string;
  image: string;
  description: string;
  prices: {
    sedan: number;
    suv: number;
  };
}

export interface OneWayTaxi {
  slug: string;
  title: string;
  image: string;
  description: string;
  routes: {
    [key: string]: Route;
  };
}

export interface OneWayTaxiData {
  [key: string]: OneWayTaxi;
} 