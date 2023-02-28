import { Injectable } from "@nestjs/common";

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

@Injectable()
export class SortService {
  sortProducts(products: Product[], sortingFormulas: SortingFormula[]) {
    // TODO: dear candidate, please implement this method
    const sortedProducts = [];
  }

  public getVariantValue(variant: Variant, name: string): number {
    if (name === "fixedValue:3") {
      return 3;
    }
    return variant[name];
  }

  calculateVariantStockSums(products: Product[], results: any[]): void {
    products.forEach((product) => {
      const key = `${product.name}'s stock score is`;
      if (!results[key]) {
        const stocks = product.variants.map((v) => v.stock);
        const sum = stocks.reduce((a, b) => a + b, 0);
        results[key] = sum;
      }
    });
  }

  //* A method to create a results array */
  calculateVariantPageViewMean(products: Product[], results: any[]): void {
    products.forEach((product) => {
      const key = `${product.name}'s page view mean is`;
      if (!results[key]) {
        const pageViews = product.variants.map((v) => v.pageView);
        const mean = this.calcPageView(pageViews);
        results[key] = mean;
      }
    });
  }

  calculateVariantConversionRateMean(
    products: Product[],
    results: any[]
  ): void {
    products.forEach((product) => {
      const key = `${product.name}'s conversion rate mean is`;
      if (!results[key]) {
        const conversionRates = product.variants.map((v) => v.conversionRate);
        const mean = this.calcPageView(conversionRates);
        results[key] = mean;
      }
    });
  }

  calculateVariantRefundRateMean(products: Product[], results: any[]): void {
    products.forEach((product) => {
      const key = `${product.name}'s refund rate mean is`;
      if (!results[key]) {
        const refundRates = product.variants.map((v) => v.refundRate);
        const mean = this.calcPageView(refundRates);
        results[key] = mean;
      }
    });
  }

  calculateProductStats(products: Product[]): any {
    const results = [];

    this.calculateVariantStockSums(products, results);
    this.calculateVariantPageViewMean(products, results);
    this.calculateVariantConversionRateMean(products, results);
    this.calculateVariantRefundRateMean(products, results);

    const stats = Object.entries(results).reduce((acc, [key, value]) => {
      const [product, statType] = key.split("'s ");
      const statObj = acc.find((obj) => obj[product]);
      if (statObj) {
        statObj[product][statType] = value;
      } else {
        acc.push({ [product]: { [statType]: value } });
      }
      return acc;
    }, []);

    return stats;
  }

  //* Calculates stock sums for each variant with same name like white / small : ... */
  // calculateVariantStockSums(products: Product[]): any {
  //   const variantStockSums = {};
  //   products.forEach((product) => {
  //     product.variants.forEach((variant) => {
  //       const key = `${variant.name}'s stock score is:`;
  //       if (!variantStockSums[key]) {
  //         variantStockSums[key] = 0;
  //       }
  //       variantStockSums[key] += variant.stock;
  //     });
  //   });

  //   return variantStockSums;
  // }

  //* ------------------- */

  //* Calculates pageViews means for each product returns object */
  // calculateVariantPageViewMean(products: Product[]): any {
  //   const productPageViewMean = {};
  //   products.forEach((product) => {
  //     const key = `${product.name}'s page view mean is:`;
  //     if (!productPageViewMean[key]) {
  //       const pageViews = product.variants.map((v) => v.pageView);
  //       const mean = this.calcPageView(pageViews);
  //       productPageViewMean[key] = mean;
  //     }
  //   });

  //   return productPageViewMean;
  // }

  calcPageView(pageViews: number[]): number {
    const sum = pageViews.reduce((a, b) => a + b, 0);
    return sum / pageViews.length;
  }

  //* ------------------- */

  //* Calculates conversionRates means for each product returns object */
  // calculateVariantConversionRateMean(products: Product[]): any {
  //   const productConversionRateMean = {};
  //   products.forEach((product) => {
  //     const key = `${product.name}'s conversion rate mean is:`;
  //     if (!productConversionRateMean[key]) {
  //       const conversionRates = product.variants.map((v) => v.conversionRate);
  //       const mean = this.calcPageView(conversionRates);
  //       productConversionRateMean[key] = mean;
  //     }
  //   });

  //   return productConversionRateMean;
  // }

  calcConversionRate(conversionRates: number[]): number {
    const sum = conversionRates.reduce((a, b) => a + b, 0);
    return sum / conversionRates.length;
  }

  //* ------------------- */

  //* Calculates refundRates means for each product returns object */
  // calculateVariantRefundRateMean(products: Product[]): any {
  //   const productRefundRateMean = {};
  //   products.forEach((product) => {
  //     const key = `${product.name}'s refund rate mean is:`;
  //     if (!productRefundRateMean[key]) {
  //       const refundRates = product.variants.map((v) => v.refundRate);
  //       const mean = this.calcPageView(refundRates);
  //       productRefundRateMean[key] = mean;
  //     }
  //   });

  //   return productRefundRateMean;
  // }

  calcRefundRate(refundRates: number[]): number {
    const sum = refundRates.reduce((a, b) => a + b, 0);
    return sum / refundRates.length;
  }

  //* ------------------- */

  //* Calculates all stocks sum */
  calcStock(products: Product[]) {
    let stocks: number[] = [];

    products.forEach((product) => {
      product.variants.forEach((variant) => {
        stocks.push(variant.stock);
      });
    });

    return stocks.reduce((a, b) => a + b, 0);
  }

  calculateStock(products: Product[], results: any[]): void {
    const totalStock = products.reduce((acc, curr) => {
      return acc + curr.variants.reduce((acc2, curr2) => acc2 + curr2.stock, 0);
    }, 0);

    const key = "total stock is";
    const value = totalStock;

    results.push({ key, value });
  }

  //* Calculates all stocks sum */
  // calcStock(products: Product[]) {
  //   const stockSums: number[] = [];

  //   products.forEach((product) => {
  //     let stockValues: number[] = [];
  //     product.variants.forEach((variant) => {
  //       stockValues.push(variant.stock);
  //     });
  //     const sum = stockValues.reduce((a, b) => a + b, 0);
  //     stockSums.push(sum);
  //   });

  //   return stockSums;
  // }

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

  //* Calculates all pageViews mean */
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

  //* Calculates all conversionRates mean */
  calcConversionRateMean(products: Product[]) {
    const conversionRatesMeans: number[] = [];

    products.forEach((product) => {
      let conversionRates: number[] = [];
      product.variants.forEach((variant) => {
        conversionRates.push(variant.conversionRate);
      });
      const mean =
        conversionRates.reduce((a, b) => a + b, 0) / conversionRates.length;
      conversionRatesMeans.push(mean);
    });

    return conversionRatesMeans;
  }

  //* Calculates all refundRates mean */
  calcRefundRatesMean(products: Product[]) {
    const refundRateMeans: number[] = [];

    products.forEach((product) => {
      let refundRates: number[] = [];
      product.variants.forEach((variant) => {
        refundRates.push(variant.refundRate);
      });
      const mean = refundRates.reduce((a, b) => a + b, 0) / refundRates.length;
      refundRateMeans.push(mean);
    });

    return refundRateMeans;
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
