"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortController = void 0;
const sort_service_1 = require("./sort.service");
const common_1 = require("@nestjs/common");
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
                name: "White / Large",
                stock: 5,
                pageView: 5,
                conversionRate: 6,
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
                name: "White / Large",
                stock: 10,
                pageView: 9,
                conversionRate: 4,
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
                name: "White / Large",
                stock: 3,
                pageView: 6,
                conversionRate: 1,
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
        value: 3,
    },
    {
        operator: "div",
        name: "conversionRate",
    },
];
let SortController = class SortController {
    constructor(sortService) {
        this.sortService = sortService;
    }
    getMean() {
        const pageViewMeans = this.sortService.calcPageViewMean(mockProducts);
        const productsWithSums = this.sortService.calcStock(mockProducts);
        const conversionRateMeans = this.sortService.calcConversionRateMean(mockProducts);
        return {
            pageViewMeans,
            productsWithSums,
            conversionRateMeans,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SortController.prototype, "getMean", null);
SortController = __decorate([
    (0, common_1.Controller)("sort"),
    __param(0, (0, common_1.Inject)("SortService")),
    __metadata("design:paramtypes", [sort_service_1.SortService])
], SortController);
exports.SortController = SortController;
//# sourceMappingURL=sort.controller.js.map