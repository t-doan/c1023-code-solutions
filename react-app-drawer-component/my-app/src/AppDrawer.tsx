import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../hylian-emblem.svg';

type Props = {
  menu: string[];
};

export function AppDrawer({ menu }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCurrent, setIsCurrent] = useState(0);

  function handleToggle(e) {
    setIsOpen(!isOpen);
    setIsCurrent(e);
  }

  return (
    <div>
      <div className="menu-icon" onClick={handleToggle}>
        <FaBars />
      </div>
      <div
        onClick={handleToggle}
        className={`menu-shade ${isOpen ? 'is-drawn' : ''}`}></div>
      <div className="menu-heading">
        <Header item={menu[isCurrent]} />
        <div className="logo-img">
          <Image />
        </div>
      </div>
      <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <Items
          list={menu}
          count={menu.length}
          currentIndex={isCurrent}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}

type HeaderProps = {
  item: string;
};
function Header({ item }: HeaderProps) {
  return <h1>{item}</h1>;
}

function Image() {
  return <img src={logo} alt="hylian" />;
}

type ItemsProp = {
  list: Props['menu'];
  count: number;
  currentIndex: number;
  onClick: (index: number) => void;
};
function Items({ list, count, currentIndex, onClick }: ItemsProp) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <li
        key={i}
        style={{
          backgroundColor: i === currentIndex ? 'lightcyan' : undefined,
        }}
        onClick={() => {
          onClick(i);
        }}>
        {list[i]}
      </li>
    );
  }
  return (
    <>
      <h3>Choose a Game</h3>
      <ul>{items}</ul>
    </>
  );
}
