import { Talla2 } from "src/_2casoN:N/talla2/entities/talla2.entity"
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Producto2 {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @Column()
  descripcion: string

  @ManyToMany(() => Talla2)
  @JoinTable()
  tallas: Talla2[]
}
