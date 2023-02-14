import { Request, Response, Router } from "express";
import { ProductController } from "../controllers/product.controller";

export class ProductRoutes {
  public router: Router;
  private productController: ProductController;
  constructor() {
    this.router = Router();
    this.productController = new ProductController();
    this.routers();
  }

  public routers() {
    this.router.get("/products", (req: Request, res: Response) =>
      this.productController.findAll(req, res)
    );
    this.router.get("/product/:id", (req: Request, res: Response) =>
      this.productController.findProductById(req, res)
    );
    this.router.post("/product/create", (req: Request, res: Response) => {
      this.productController.createProduct(req, res);
    });
    this.router.put("/product/update/:id", (req: Request, res: Response) => {
      this.productController.updateProduct(req, res);
    });
    this.router.delete("/product/delete/:id", (req: Request, res: Response) => {
      this.productController.deleteProduct(req, res);
    });
  }
}
