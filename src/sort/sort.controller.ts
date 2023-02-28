import { SortService } from "./sort.service";
import { Controller, Get, Inject } from "@nestjs/common";

const mockProducts = [
  {
    name: "Amazing Tshirt",
    price: 100,
    variants: [
      {
        name: "White / Small",
        stock: 3,
        pageView: 2,
        conversionRate: 2,
      },
      {
        name: "White / Medium",
        stock: 4,
        pageView: 2,
        conversionRate: 7,
      },
      {
        name: "White / Large", // 100    192
        stock: 5, // 12
        pageView: 5, // 3
        conversionRate: 6, // 5
      },
    ],
  },
  {
    name: "Ooooversize Tshirt",
    price: 80,
    variants: [
      {
        name: "White / Small",
        stock: 4,
        pageView: 3,
        conversionRate: 5,
      },
      {
        name: "White / Medium",
        stock: 3,
        pageView: 6,
        conversionRate: 9,
      },
      {
        name: "White / Large", // 80    257
        stock: 10, // 17
        pageView: 9, // 6
        conversionRate: 4, // 6
      },
    ],
  },
  {
    name: "SLIM Tshirt",
    price: 75,
    variants: [
      {
        name: "White / Small",
        stock: 6,
        pageView: 2,
        conversionRate: 1,
      },
      {
        name: "White / Medium",
        stock: 4,
        pageView: 4,
        conversionRate: 10,
      },
      {
        name: "White / Large", // 75  238
        stock: 3, // 13
        pageView: 6, // 4
        conversionRate: 1, // 4
      },
    ],
  },
];

const mockSortingFormula = [
  {
    operator: "first",
    name: "stock",
  },
  {
    operator: "add",
    name: "pageView",
  },
  {
    operator: "mul",
    name: "price",
  },
  {
    operator: "mul",
    name: "fixedValue",
  },
  {
    operator: "div",
    name: "conversionRate",
  },
];

@Controller("sort")
export class SortController {
  constructor(
    @Inject("SortService") private readonly sortService: SortService
  ) {}

  @Get()
  getMean(): any {
    // const pageViewMeans = this.sortService.calcPageViewMean(mockProducts);
    // const productsWithSums = this.sortService.calcStock(mockProducts);
    // const conversionRateMeans =
    //   this.sortService.calcConversionRateMean(mockProducts);
    // const sortedProducts = this.sortService.sortProducts(
    //   mockProducts,
    //   mockSortingFormula
    // );
    const stats = this.sortService.calculateProductStats(mockProducts);

    return {
      // pageViewMeans,
      // productsWithSums,
      // conversionRateMeans,
      // sortedProducts,
      stats,
    };
  }
}
