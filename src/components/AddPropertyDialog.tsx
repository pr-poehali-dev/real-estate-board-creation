import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

export function AddPropertyDialog() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Объявление добавлено!",
      description: "Ваше объявление успешно опубликовано и скоро появится в списке."
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
          <Icon name="Plus" size={20} className="mr-2" />
          Добавить объявление
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Новое объявление</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Заголовок</Label>
            <Input id="title" placeholder="Например: 3-комнатная квартира в центре" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Цена (₽)</Label>
              <Input id="price" type="number" placeholder="5000000" required />
            </div>
            <div>
              <Label htmlFor="area">Площадь (м²)</Label>
              <Input id="area" type="number" placeholder="75" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="rooms">Количество комнат</Label>
              <Select required>
                <SelectTrigger id="rooms">
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
              <Label htmlFor="district">Район</Label>
              <Select required>
                <SelectTrigger id="district">
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

          <div>
            <Label htmlFor="location">Адрес</Label>
            <Input id="location" placeholder="ул. Примерная, д. 10" required />
          </div>

          <div>
            <Label htmlFor="description">Описание</Label>
            <Textarea 
              id="description" 
              placeholder="Расскажите о преимуществах вашей недвижимости..." 
              rows={4}
              required 
            />
          </div>

          <div>
            <Label htmlFor="image">Фото (URL)</Label>
            <Input id="image" type="url" placeholder="https://example.com/photo.jpg" required />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Опубликовать объявление
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
