import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../config/datasource";
import { CreateProductDto } from "../entities/dto/create-product.dto";
import { UpdateProductDto } from "../entities/dto/update-product.dto";
import { ProductEntity } from "../entities/product.entity";

export class ProductService {
  private productRepository: Repository<ProductEntity>;

  constructor() {
    this.productRepository = AppDataSource.getRepository(ProductEntity);
  }

  public async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  public async findProductById(id: number): Promise<ProductEntity | null> {
    return await this.productRepository.findOneBy({ id });
  }

  public async createProduct(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const { name, description, price } = createProductDto;
    const newProduct = new ProductEntity();
    newProduct.name = name;
    newProduct.description = description;
    newProduct.price = price;
    return await this.productRepository.save(newProduct);
  }

  public async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<UpdateResult> {
    return await this.productRepository.update(id, updateProductDto);
  }

  public async deleteProduct(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
