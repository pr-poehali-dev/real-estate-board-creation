import { AddPropertyDialog } from "./AddPropertyDialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Home" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              RealEstate
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="hover:text-primary transition-colors">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="hover:text-primary transition-colors">
              <Icon name="Search" size={18} className="mr-2" />
              Поиск
            </Button>
            <Button variant="ghost" className="hover:text-primary transition-colors">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </Button>
            <Button variant="ghost" className="hover:text-primary transition-colors">
              <Icon name="HelpCircle" size={18} className="mr-2" />
              Помощь
            </Button>
          </nav>

          <div className="flex items-center gap-4">
            <AddPropertyDialog />
          </div>
        </div>
      </div>
    </header>
  );
}
