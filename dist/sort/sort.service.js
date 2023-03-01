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
    sortProducts(products, sortingFormulas) {
        const sortedProducts = [];
    }
    getVariantValue(variant, name) {
        if (name === "fixedValue:3") {
            return 3;
        }
        return variant[name];
    }
    calculateVrStockSums(products) {
        products.forEach((product) => {
            let stockSum = 0;
            const sum = product.variants.reduce((acc, variant) => {
                stockSum += variant.stock;
                return stockSum;
            }, 0);
            console.log("sum", sum);
            console.log(product.variants.map((v) => v.stock));
            return sum;
        });
    }
    calculateVariantPageViewMean(products, results) {
        products.forEach((product) => {
            const key = product.name + "'s pageView";
            if (!results[key]) {
                const pageViews = product.variants.map((v) => v.pageView);
                const mean = this.calcPageView(pageViews);
                results[key] = mean;
            }
        });
    }
    calculateVariantConversionRateMean(products, results) {
        products.forEach((product) => {
            const key = product.name + "'s conversionRate";
            if (!results[key]) {
                const conversionRates = product.variants.map((v) => v.conversionRate);
                const mean = this.calcPageView(conversionRates);
                results[key] = mean;
            }
        });
    }
    calculateVariantRefundRateMean(products, results) {
        products.forEach((product) => {
            const key = product.name + "'s refundRate";
            if (!results[key]) {
                const refundRates = product.variants.map((v) => v.refundRate);
                const mean = this.calcPageView(refundRates);
                results[key] = mean;
            }
        });
    }
    finalStockScore(products) {
        const finalScore = this.calculateProductStats(products);
        const amazingTshirt = finalScore.find((product) => {
            Object.keys(product).includes("Amazing Tshirt");
            return product;
        });
        return amazingTshirt;
    }
    calculateProductStats(products) {
        const results = [];
        this.calculateVariantPageViewMean(products, results);
        this.calculateVariantConversionRateMean(products, results);
        this.calculateVariantRefundRateMean(products, results);
        const stats = Object.entries(results).reduce((acc, [key, value]) => {
            const [product, statType] = key.split("'s ");
            const statObj = acc.find((obj) => obj[product]);
            if (statObj) {
                statObj[product][statType] = value;
            }
            else {
                acc.push({ [product]: { [statType]: value } });
            }
            return acc;
        }, []);
        return stats;
    }
    calcPageView(pageViews) {
        const sum = pageViews.reduce((a, b) => a + b, 0);
        return sum / pageViews.length;
    }
    calcConversionRate(conversionRates) {
        const sum = conversionRates.reduce((a, b) => a + b, 0);
        return sum / conversionRates.length;
    }
    calcRefundRate(refundRates) {
        const sum = refundRates.reduce((a, b) => a + b, 0);
        return sum / refundRates.length;
    }
    calcStock(products) {
        let stocks = [];
        products.forEach((product) => {
            product.variants.forEach((variant) => {
                stocks.push(variant.stock);
            });
        });
        return stocks.reduce((a, b) => a + b, 0);
    }
    calculateStock(products, results) {
        const totalStock = products.reduce((acc, curr) => {
            return acc + curr.variants.reduce((acc2, curr2) => acc2 + curr2.stock, 0);
        }, 0);
        const key = "total stock is";
        const value = totalStock;
        results.push({ key, value });
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
    calcConversionRateMean(products) {
        const conversionRatesMeans = [];
        products.forEach((product) => {
            let conversionRates = [];
            product.variants.forEach((variant) => {
                conversionRates.push(variant.conversionRate);
            });
            const mean = conversionRates.reduce((a, b) => a + b, 0) / conversionRates.length;
            conversionRatesMeans.push(mean);
        });
        return conversionRatesMeans;
    }
    calcRefundRatesMean(products) {
        const refundRateMeans = [];
        products.forEach((product) => {
            let refundRates = [];
            product.variants.forEach((variant) => {
                refundRates.push(variant.refundRate);
            });
            const mean = refundRates.reduce((a, b) => a + b, 0) / refundRates.length;
            refundRateMeans.push(mean);
        });
        return refundRateMeans;
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