import { Request, Response } from "express";
import { HttpStatus } from "../http-status/status/http.status";
import { ProductService } from "../services/product.service";

export class ProductController {
  private productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  public async findAll(req: Request, res: Response) {
    try {
      const products = await this.productService.findAll();
      if (!products.length) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ 
            message: "NOT FOUND" 
          });
      }
      res.status(HttpStatus.OK).json(products);
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error" });
    }
  }

  public async findProductById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await this.productService.findProductById(id);
      if (!product) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Not Found" });
      }
      res.status(HttpStatus.OK).json(product);
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error" });
    }
  }

  public async createProduct(req: Request, res: Response) {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(HttpStatus.OK).json(product);
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error" });
    }
  }

  public async updateProduct(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await this.productService.updateProduct(id, req.body);
      if (!result.affected) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Not Found" });
      }
      res.status(HttpStatus.OK).json({ message: "Successfully Updated" });
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error" });
    }
  }

  public async deleteProduct(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await this.productService.deleteProduct(id);
      if (!result.affected) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Not Found" });
      }
      res.status(HttpStatus.OK).json({ message: "Successfully Deleted" });
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error" });
    }
  }
}
