 
 drop TABLE entregan
 drop TABLE materiales
 drop TABLE proyectos
 drop TABLE Provedores

 IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')

 DROP TABLE Materiales

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
DROP TABLE Proveedores


CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
DROP TABLE Proyectos

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')

DROP TABLE Entregan

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
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
  FROM 'e:\wwwroot\rcortese\Proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1705674.a1705674.[Proveedores]
  FROM 'e:\wwwroot\rcortese\Proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1705674.a1705674.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

  select* from Materiales
  select* from Proveedores
  select* from Proyectos
  select* from Entregan


  INSERT INTO Materiales values(1000, 'xxx', 1000)

 
  ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)

  sp_helpconstraint materiales

  ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)

  sp_helpconstraint Proveedores

  ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)

  c

  ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY NONCLUSTERED(Clave, RFC, Numero)
 
   ALTER TABLE Entregan drop constraint llaveEntregan

  INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) 

  select* from Entregan

  Delete from Entregan where Clave = 0

    ALTER TABLE entregan add constraint cfentreganclave
  foreign key (clave) references materiales(clave);

   ALTER TABLE entregan add constraint cfentreganrfc
  foreign key (RFC) references proveedores(RFC);

   ALTER TABLE entregan add constraint cfentreganproyectos
  foreign key (numero) references Proyectos(numero);

   sp_helpconstraint entregan

    INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);

	Delete from Entregan where Cantidad = 0
	ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;