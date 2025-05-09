{
  //Task 4: Union and Intersection Types
  // Objective: Create union and intersection types using interfaces.

  // Instructions:

  // Define interfaces Book and Magazine.
  // Create:
  // A type that is a union of Book and Magazine.
  // A type that is an intersection of Book and Magazine.

  //solve:

  interface Book {
    page: number;
    name: string;
  }

  interface Magazine {
    issue: number;
    title: string;
  }

  // Union Type
  type ReadingMaterial = Book | Magazine;

  // Intersection Type
  type BookMagazine = Book & Magazine;

  // Example:
  const example1: ReadingMaterial = { page: 100, name: "TS Handbook" };
  const example2: BookMagazine = {
    page: 150,
    name: "TS Weekly",
    issue: 10,
    title: "Tech Mag",
  };

  //
}
