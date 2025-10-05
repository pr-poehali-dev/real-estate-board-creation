import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PropertyCardProps {
  id: number;
  title: string;
  price: number;
  area: number;
  rooms: number;
  location: string;
  image: string;
}

export function PropertyCard({ title, price, area, rooms, location, image }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {price.toLocaleString('ru-RU')} ₽
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Icon name="MapPin" size={16} />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-6 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={16} className="text-primary" />
            <span>{rooms} комн.</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Maximize" size={16} className="text-primary" />
            <span>{area} м²</span>
          </div>
        </div>
        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
          Посмотреть детали
        </Button>
      </CardContent>
    </Card>
  );
}
