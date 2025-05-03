{
  // Constraints in typescript

  const addCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "next level";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 22,
    name: "a",
    email: "g",
    devType: "full",
  });
  const student2 = addCourse({ id: 22, name: "a", email: "g", isGood: true });
  const student3 = addCourse({ id: 22, name: "a", email: "g" });
  //
}
