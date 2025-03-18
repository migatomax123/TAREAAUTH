import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { PostsModule } from './_caso1:N/posts/posts.module';
import { UsersModule } from './_caso1:N/users/users.module';
import { UserModule } from './_caso1:1/user/user.module';
import { ProfileModule } from './_caso1:1/profile/profile.module';
import { ProductoModule } from './_1casoN:N/producto/producto.module';
import { TallaModule } from './_1casoN:N/talla/talla.module';
import { ProductotallaModule } from './_1casoN:N/productotalla/productotalla.module';
import { Producto2Module } from './_2casoN:N/producto2/producto2.module';
import { Talla2Module } from './_2casoN:N/talla2/talla2.module';
import { ProveedorModule } from './_recambios/proveedor/proveedor.module';
import { PiezaModule } from './_recambios/pieza/pieza.module';
import { CategoriaModule } from './_recambios/categoria/categoria.module';
import { SuministraModule } from './_recambios/suministra/suministra.module';
import { AutorModule } from './_biblioteca/autor/autor.module';
import { LibroModule } from './_biblioteca/libro/libro.module';
import { AuthModule } from './_biblioteca/auth/auth.module';
import { UsuarioModule } from './_biblioteca/users/users.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}), 
    TypeOrmModule.forRoot({
      name:'base1',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME,
      autoLoadEntities:true,//Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'base2',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME2,
      autoLoadEntities:true,//Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize:true
    }),
    BibliotecaModule,
    PostsModule,
    UsersModule,
    UserModule,
    ProfileModule,
    ProductoModule,
    TallaModule,
    ProductotallaModule,
    Producto2Module,
    Talla2Module,
    ProveedorModule,
    PiezaModule,
    CategoriaModule,
    SuministraModule,
    AutorModule,
    LibroModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
