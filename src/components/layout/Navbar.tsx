import BroadsheetHeader from "./BroadsheetHeader";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  return <BroadsheetHeader onOpenCommandPalette={onOpenCommandPalette} />;
}
