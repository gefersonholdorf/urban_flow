-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bus_stops" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "bus_stops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "route_bus_stop" (
    "id" TEXT NOT NULL,
    "route_id" TEXT NOT NULL,
    "bus_stop" TEXT NOT NULL,

    CONSTRAINT "route_bus_stop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "routes_code_key" ON "routes"("code");

-- AddForeignKey
ALTER TABLE "route_bus_stop" ADD CONSTRAINT "route_bus_stop_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "route_bus_stop" ADD CONSTRAINT "route_bus_stop_bus_stop_fkey" FOREIGN KEY ("bus_stop") REFERENCES "bus_stops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
