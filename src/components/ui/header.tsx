import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import Menu from "./menu";

const Header = () => {
  
  return (
    <header>
      <Card className="flex items-center justify-between p-[1.875rem]">
        <Menu />
          
          <h1 className="text-lg font-semibold">
            <span className="text-primary">FSW</span> Store
          </h1>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
      </Card>
    </header>
  );
};

export default Header;
