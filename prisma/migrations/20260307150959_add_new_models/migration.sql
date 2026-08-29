-- CreateEnum
CREATE TYPE "Listing_Type" AS ENUM ('SALE', 'RENT');

-- CreateEnum
CREATE TYPE "Type_Place" AS ENUM ('MODERN_VILLA', 'SINGLE_FAMILY', 'TOWN_HOUSE', 'APPARTMENT', 'OFFICE');

-- CreateEnum
CREATE TYPE "Features" AS ENUM ('PARKING', 'BALCONY', 'POOL', 'GARAGE', 'ELEVATOR', 'AC');

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "listing_type" "Listing_Type" NOT NULL,
    "type_place" "Type_Place" NOT NULL,
    "features" "Features" NOT NULL,
    "agentId" INTEGER NOT NULL,
    "favoriteId" INTEGER NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
