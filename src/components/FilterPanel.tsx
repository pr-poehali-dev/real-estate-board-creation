import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface FilterPanelProps {
  onFilterChange: (filters: FilterValues) => void;
}

export interface FilterValues {
  priceMin: string;
  priceMax: string;
  areaMin: string;
  areaMax: string;
  rooms: string;
  district: string;
}

export function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [filters, setFilters] = useState<FilterValues>({
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    rooms: "",
    district: ""
  });

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const emptyFilters: FilterValues = {
      priceMin: "",
      priceMax: "",
      areaMin: "",
      areaMax: "",
      rooms: "",
      district: ""
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <Card className="sticky top-4 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="SlidersHorizontal" size={24} className="text-primary" />
            Фильтры
          </h2>
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Сбросить
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium mb-2 block">Цена (₽)</Label>
            <div className="flex gap-2">
              <Input 
                type="number" 
                placeholder="От" 
                value={filters.priceMin}
                onChange={(e) => handleFilterChange("priceMin", e.target.value)}
              />
              <Input 
                type="number" 
                placeholder="До" 
                value={filters.priceMax}
                onChange={(e) => handleFilterChange("priceMax", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Площадь (м²)</Label>
            <div className="flex gap-2">
              <Input 
                type="number" 
                placeholder="От" 
                value={filters.areaMin}
                onChange={(e) => handleFilterChange("areaMin", e.target.value)}
              />
              <Input 
                type="number" 
                placeholder="До" 
                value={filters.areaMax}
                onChange={(e) => handleFilterChange("areaMax", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Количество комнат</Label>
            <Select value={filters.rooms} onValueChange={(value) => handleFilterChange("rooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 комната</SelectItem>
                <SelectItem value="2">2 комнаты</SelectItem>
                <SelectItem value="3">3 комнаты</SelectItem>
                <SelectItem value="4">4+ комнаты</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Район</Label>
            <Select value={filters.district} onValueChange={(value) => handleFilterChange("district", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите район" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="center">Центр</SelectItem>
                <SelectItem value="north">Северный</SelectItem>
                <SelectItem value="south">Южный</SelectItem>
                <SelectItem value="east">Восточный</SelectItem>
                <SelectItem value="west">Западный</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
