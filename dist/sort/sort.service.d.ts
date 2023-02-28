type Product = {
    name: string;
    price: number;
    variants: Variant[];
    fixedValue?: number;
};
type Variant = {
    name: string;
    stock: number;
    pageView?: number;
    refundRate?: number;
    conversionRate?: number;
};
type SortingFormula = {
    operator: string;
    name: string;
    value?: number;
};
export declare class SortService {
    sortProducts(products: Product[], sortingFormulas: SortingFormula[]): void;
    getVariantValue(variant: Variant, name: string): number;
    calculateVariantStockSums(products: Product[], results: any[]): void;
    calculateVariantPageViewMean(products: Product[], results: any[]): void;
    calculateVariantConversionRateMean(products: Product[], results: any[]): void;
    calculateVariantRefundRateMean(products: Product[], results: any[]): void;
    calculateProductStats(products: Product[]): any;
    calcPageView(pageViews: number[]): number;
    calcConversionRate(conversionRates: number[]): number;
    calcRefundRate(refundRates: number[]): number;
    calcStock(products: Product[]): number;
    calculateStock(products: Product[], results: any[]): void;
    calcPageViewMean(products: Product[]): number[];
    calcConversionRateMean(products: Product[]): number[];
    calcRefundRatesMean(products: Product[]): number[];
    private formulaForVariantField;
}
export {};
