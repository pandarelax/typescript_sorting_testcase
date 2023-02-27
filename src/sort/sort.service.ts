import { Injectable } from "@nestjs/common";

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

@Injectable()
export class SortService {
  sortProducts(products: Product[], sortingFormula: SortingFormula[]) {
    // TODO: dear candidate, please implement this method
  }

  // calculates stock for each variants with same name *broken*
  calculateVariantStockSums(products: Product[]): any {
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

  // Calculates pageview means for each product
  calculateVariantPageViewMean(products: Product[]): any {
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

  calcPageView(pageViews: number[]): number {
    const sum = pageViews.reduce((a, b) => a + b, 0);
    return sum / pageViews.length;
  }

  //* Calculates all stocks sum */
  // calcStock(products: Product[]) {
  //   let stocks: number[] = [];

  //   products.forEach((product) => {
  //     product.variants.forEach((variant) => {
  //       stocks.push(variant.stock);
  //     });
  //   });

  //   return stocks.reduce((a, b) => a + b, 0);
  // }

  calcStock(products: Product[]) {
    const stockSums: number[] = [];

    products.forEach((product) => {
      let stockValues: number[] = [];
      product.variants.forEach((variant) => {
        stockValues.push(variant.stock);
      });
      const sum = stockValues.reduce((a, b) => a + b, 0);
      stockSums.push(sum);
    });

    return stockSums;
  }

  //* Calculates all pageviews mean */
  // calcPageView(products: Product[]) {
  //   let pageViews: number[] = [];

  //   products.forEach((product) => {
  //     product.variants.forEach((variant) => {
  //       pageViews.push(variant.pageView);
  //     });
  //   });

  //   const sum = pageViews.reduce((a, b) => a + b, 0);
  //   return sum / pageViews.length;
  // }

  // Calculates all pageviews means for each product and returns an array of means
  calcPageViewMean(products: Product[]) {
    const pageViewMeans: number[] = [];

    products.forEach((product) => {
      let pageViews: number[] = [];
      product.variants.forEach((variant) => {
        pageViews.push(variant.pageView);
      });
      const mean = pageViews.reduce((a, b) => a + b, 0) / pageViews.length;
      pageViewMeans.push(mean);
    });

    return pageViewMeans;
  }

  private formulaForVariantField(fieldName) {
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
}
