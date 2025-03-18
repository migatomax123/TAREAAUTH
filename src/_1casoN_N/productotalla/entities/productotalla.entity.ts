import { Producto } from "src/_1casoN:N/producto/entities/producto.entity"
import { Talla } from "src/_1casoN:N/talla/entities/talla.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductoTalla {
  @PrimaryGeneratedColumn()
  id: number

  @Column("decimal", { precision: 10, scale: 2 })
  precio: number

  @ManyToOne(
    () => Producto,
    (producto) => producto.productoTallas,
  )
  producto: Producto

  @ManyToOne(
    () => Talla,
    (talla) => talla.productoTallas,
  )
  talla: Talla
}
