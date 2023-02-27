type Product = {
    name: string;
    price: number;
    variants: Variant[];
};
type Variant = {
    name: string;
    stock: number;
    pageView?: number;
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
    calcStock(products: Product[]): number[];
    calcPageViewMean(products: Product[]): number[];
    private formulaForVariantField;
}
export {};
