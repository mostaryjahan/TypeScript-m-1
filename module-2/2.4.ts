{
  //Generic with Interface

  //normal way
  interface Developer<T, X = null> {
    name: string;
    laptop: {
      brand: string;
      price: number;
      model: string;
    };
    smartWatch: T;
    bike? : X
  }

  type Apple = {
        brand: string;
        model: string;
        display: string;
      }
  
  const poor: Developer<Apple> = {
    name: "faltu",
    laptop: {
      brand: "HP",
      price: 2300,
      model: "X-9k",
    },
    smartWatch: {
      brand: "apple",
      model: "pro 12",
      display: "OLED",
    },
  };


  interface Apple2 {
    brand: string;
    model: string;
    price: number;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engine: string
  }
  const rich: Developer<Apple2, YamahaBike> = {
    name: "ghada",
    laptop: {
      brand: "Apple",
      price: 10000,
      model: "X-Air m4",
    },
    smartWatch: {
      brand: "apple",
      model: "pro 12",
      price: 1200,
      sleepTrack: true,
    },
    bike: {
        model: "yamaha",
        engine: "100c"
    }
  };

  //
}
