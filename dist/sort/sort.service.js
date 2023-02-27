"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortService = void 0;
const common_1 = require("@nestjs/common");
let SortService = class SortService {
    sortProducts(products, sortingFormula) {
    }
    calculateVariantStockSums(products) {
        const variantStockSums = {};
        products.forEach((product) => {
            product.variants.forEach((variant) => {
                const key = `${variant.name}'s stock score is:`;
                if (!variantStockSums[key]) {
                    variantStockSums[key] = 0;
                }
                variantStockSums[key] += variant.stock;
            });
        });
        return variantStockSums;
    }
    calculateVariantPageViewMean(products) {
        const productPageViewMean = {};
        products.forEach((product) => {
            const key = `${product.name}'s page view mean is:`;
            if (!productPageViewMean[key]) {
                const pageViews = product.variants.map((v) => v.pageView);
                const mean = this.calcPageView(pageViews);
                productPageViewMean[key] = mean;
            }
        });
        return productPageViewMean;
    }
    calcPageView(pageViews) {
        const sum = pageViews.reduce((a, b) => a + b, 0);
        return sum / pageViews.length;
    }
    calcStock(products) {
        const stockSums = [];
        products.forEach((product) => {
            let stockValues = [];
            product.variants.forEach((variant) => {
                stockValues.push(variant.stock);
            });
            const sum = stockValues.reduce((a, b) => a + b, 0);
            stockSums.push(sum);
        });
        return stockSums;
    }
    calcPageViewMean(products) {
        const pageViewMeans = [];
        products.forEach((product) => {
            let pageViews = [];
            product.variants.forEach((variant) => {
                pageViews.push(variant.pageView);
            });
            const mean = pageViews.reduce((a, b) => a + b, 0) / pageViews.length;
            pageViewMeans.push(mean);
        });
        return pageViewMeans;
    }
    formulaForVariantField(fieldName) {
        switch (fieldName) {
            case "stock":
                return "arithmetic-sum";
            case "pageView":
                return "arithmetic-mean";
            case "conversionRate":
                return "arithmetic-mean";
            case "refundRate":
                return "arithmetic-mean";
            default:
                return "arithmetic-mean";
        }
    }
};
SortService = __decorate([
    (0, common_1.Injectable)()
], SortService);
exports.SortService = SortService;
//# sourceMappingURL=sort.service.js.map