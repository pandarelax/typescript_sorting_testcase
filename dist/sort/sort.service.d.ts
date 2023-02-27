type Product = {
    name: string;
    price: number;
    variants: Variant[];
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
    sortProducts(products: Product[], sortingFormula: SortingFormula[]): void;
    calculateVariantStockSums(products: Product[]): any;
    calculateVariantPageViewMean(products: Product[]): any;
    calcPageView(pageViews: number[]): number;
    calculateVariantConversionRateMean(products: Product[]): any;
    calcConversionRate(conversionRates: number[]): number;
    calculateVariantRefundRateMean(products: Product[]): any;
    calcRefundRate(refundRates: number[]): number;
    calcStock(products: Product[]): number[];
    calcPageViewMean(products: Product[]): number[];
    calcConversionRateMean(products: Product[]): number[];
    calcRefundRatesMean(products: Product[]): number[];
    private formulaForVariantField;
}
export {};
