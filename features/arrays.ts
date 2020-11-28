const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corola"], ["camaro"]];

// Help with inference when extracting values
const car3 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with "map"
carMakers.map((car): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), "2030-10-10"];
const importantDates2: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates2.push("2030-10-10");
importantDates2.push(new Date());
