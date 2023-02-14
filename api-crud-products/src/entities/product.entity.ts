import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column()
  price: number;
}
