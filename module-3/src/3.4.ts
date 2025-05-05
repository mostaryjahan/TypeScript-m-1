{
    //Type guard using "instanceof"
    //instanceof{ guard}

    class Animal {
        name: string;
        species : string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species
        }

        makeSound(){
            console.log("making sound");
        }
    }

    class Dog extends Animal {
       constructor(name: string, species: string){
        super(name, species)
       }
       makeBark(){
        console.log("I am barking");
       }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
         super(name, species)
        }
        makeMew(){
         console.log("I am Mew Mew");
        }
     }


    //  const getAnimal = (animal: Animal) => {
    //   if(animal instanceof Dog){
    //    animal.makeBark()
    //   }else if(animal instanceof Cat){
    //     animal.makeMew()
    //   }else{
    //     console.log("not animal");
    //   }
    //  }

    //smart way e handle korte chaile function use korte pari

    const isDog = (animal: Animal): animal is Dog =>{
        return animal instanceof Dog
    }

    const isCat = (animal: Animal) : animal is Cat =>{
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if(isDog(animal)){
         animal.makeBark();
        }else if( isCat(animal)){
          animal.makeMew()
        }else{
          console.log("not animal");
        }
       }

     const dog = new Dog ('Dog bro', "dog");
     const cat = new Cat ('cat bro', "cat");


console.log(cat);









    //
}