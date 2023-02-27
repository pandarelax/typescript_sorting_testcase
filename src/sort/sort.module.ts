import { Module } from "@nestjs/common";
import { SortService } from "./sort.service";
import { SortController } from "./sort.controller";

@Module({
  providers: [
    {
      provide: "SortService",
      useClass: SortService,
    },
  ],
  controllers: [SortController],
})
export class SortModule {}
