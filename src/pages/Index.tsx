import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterPanel, FilterValues } from "@/components/FilterPanel";
import { PropertyCard } from "@/components/PropertyCard";

const mockProperties = [
  {
    id: 1,
    title: "Просторная 3-комнатная квартира в центре",
    price: 8500000,
    area: 95,
    rooms: 3,
    location: "Центральный район, ул. Ленина",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Уютная студия с панорамными окнами",
    price: 4200000,
    area: 42,
    rooms: 1,
    location: "Северный район, ул. Мира",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Семейная квартира с отличным ремонтом",
    price: 6800000,
    area: 78,
    rooms: 2,
    location: "Южный район, пр. Победы",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Элитный пентхаус с видом на город",
    price: 15000000,
    area: 150,
    rooms: 4,
    location: "Центральный район, набережная",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Современная 2-комнатная квартира",
    price: 5500000,
    area: 65,
    rooms: 2,
    location: "Восточный район, ул. Садовая",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Светлая квартира в новостройке",
    price: 7200000,
    area: 85,
    rooms: 3,
    location: "Западный район, ЖК Комфорт",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
  }
];

const districtMap: Record<string, string> = {
  "center": "Центральный район",
  "north": "Северный район",
  "south": "Южный район",
  "east": "Восточный район",
  "west": "Западный район"
};

export default function Index() {
  const [filters, setFilters] = useState<FilterValues>({
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    rooms: "",
    district: ""
  });

  const filteredProperties = mockProperties.filter(property => {
    if (filters.priceMin && property.price < Number(filters.priceMin)) return false;
    if (filters.priceMax && property.price > Number(filters.priceMax)) return false;
    if (filters.areaMin && property.area < Number(filters.areaMin)) return false;
    if (filters.areaMax && property.area > Number(filters.areaMax)) return false;
    if (filters.rooms && property.rooms !== Number(filters.rooms)) return false;
    if (filters.district && !property.location.includes(districtMap[filters.district])) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Найди свой идеальный дом
          </h2>
          <p className="text-xl text-muted-foreground">
            Тысячи предложений по недвижимости в одном месте
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterPanel onFilterChange={setFilters} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground">
                Найдено объявлений: <span className="font-semibold text-foreground">{filteredProperties.length}</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredProperties.map((property, index) => (
                <div key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">По вашим фильтрам ничего не найдено</p>
                <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 RealEstate. Доска объявлений по продаже недвижимости</p>
        </div>
      </footer>
    </div>
  );
}
