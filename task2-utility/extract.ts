//type Extract<T, U> = T extends U ? T : never;
type Event = {
  id: string;
  title: string;
};

type Point = {
  id: string;
  title: string;
  target: string;
  amount: number;
};

type PointInfo = Extract<Event | Point, Point>; //PointInfo = Point

//T타입에서 U타입과 겹치늩 타입만을 추출한다.
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type Circle = Extract<Shape, { kind: "circle" }>;
//{
//   kind: "circle";
//   radius: number;
// }

type CircleOrSquare = Extract<Shape, { kind: "circle" | "square" }>;

// type CircleOrSquare = {
//   kind: "circle";
//   radius: number;ex
// } | {
//   kind: "square";
//   x: number;
// }

type Routes =
  | {
      route: "/user";
      search: {
        id: string;
      };
    }
  | {
      route: "/user/create";
    }
  | {
      route: "/user/edit";
      search: {
        id: string;
      };
    };

type RoutesWithSearch = Extract<
  Routes,
  {
    search: any;
  }
>;

//type RoutesWithSearch = {
//   route: "/user";
//   search: {
//       id: string;
//   };
// } | {
//   route: "/user/edit";
//   search: {
//       id: string;
//   };
// }

// https://dev.to/arafat4693/best-ways-to-use-extract-in-typescript-jc2

const extract1 = 1;
export default extract1;

type TChar = "a" | "b" | "c" | "d";
type T01 = Extract<TChar, "a" | "c" | "f">; // "a" | "c"
