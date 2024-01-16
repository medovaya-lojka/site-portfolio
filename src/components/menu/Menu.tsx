import { useEffect, useState } from 'react'
import { 
	MenuContainer, 
	MenuLeft,
	MenuPanel, 
	MenuPanelContainer, 
	Header, 
	MenuButton, 
	PlaceContainer, 
	MenuPlace 
} from './styles';

const ANIM_TIME = 150;

function Menu(props: {setPage: (page: number) => void, headers: string[]}) {
	const [menuView, setMenuView] = useState<boolean>(false);
	const [menuId, setMenuId] = useState<number>(0);
	const [showItems, setShowItems] = useState<boolean>(false);
	const {headers, setPage} = props;

	useEffect(() => {
		if (!menuView) {
			setShowItems(false);
			return;
		}
		setTimeout(() => {
			setShowItems(menuView);
		}, ANIM_TIME);
	}, [menuView]);

	useEffect(() => {
		if (showItems !== menuView) {
			setShowItems(menuView);
		}
	}, [showItems]);

  return (
    <>
      <MenuContainer>
		<MenuPanel menuView={menuView}>
			<MenuLeft>
				<MenuButton menuView={menuView} onClick={() => setMenuView(!menuView)}>
					<img src='/images/buttonMenu.jpg'></img>
				</MenuButton>
				<PlaceContainer>
					<MenuPlace>{headers[menuId]}</MenuPlace>
				</PlaceContainer>
			</MenuLeft>
			{showItems && <MenuPanelContainer>
				{headers.map((name, index) =>
					index !== menuId && 
						<Header 
							id={'menuItem-' + index} 
							onClick={() => {
								setMenuId(index); 
								setMenuView(false); 
								setPage(index)}
							}>
							{name}
						</Header>
				)}
			</MenuPanelContainer>}
		</MenuPanel>
      </MenuContainer>
    </>
  )
}

export default Menu
