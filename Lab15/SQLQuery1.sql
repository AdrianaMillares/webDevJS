create table Materiales(
Clave numeric(5),
Desccripcion varchar(50),
Costo numeric(8,2)
)

create table Provedores(
RFC varchar(12),
Razon_Social varchar(50),
)

create table Proyectos(
Numero numeric(5),
Denominacion varchar(50),
)

create table Entregan(
Clave numeric(5),
RFC varchar(12),
Numero numeric(5),
Fecha datetime,
Cantidad numeric(8,2),
)

BULK INSERT a1705674.a1705674.[Materiales]
   FROM 'e:\wwwroot\rcortese\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1705674.a1705674.[Proyectos]
   FROM 'e:\wwwroot\rcortese\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1705674.a1705674.[Provedores]
   FROM 'e:\wwwroot\rcortese\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SET DATEFORMAT dmy

BULK INSERT a1705674.a1705674.[Entregan]
   FROM 'e:\wwwroot\rcortese\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )


select* from Entregan