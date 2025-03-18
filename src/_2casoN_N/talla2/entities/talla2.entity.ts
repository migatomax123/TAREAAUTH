import { Producto2 } from "src/_2casoN:N/producto2/entities/producto2.entity"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Talla2 {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @ManyToMany(() => Producto2)
  productos: Producto2[]
}
