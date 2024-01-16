import styled from "styled-components";

export const MenuContainer = styled.div`
	width: 100%;
	display: flex;
	height: 50px;
	padding-top: 14px;
	padding-left: 1%;
	font-family: NikitaFont;
	font-size: 24px;
	user-select: none; 
	position: fixed;
`;


export const MenuPanel = styled.div<{ menuView: boolean }>`
	background-color: #7D7D7D;
	background-image: url('/images/zerno.png');
	width: ${p => p.menuView ? "98%" : "210px"};
	border-radius: 50px;
	height: 50px;
	line-height: 50px;
	display: flex;
	justify-content: space-between;
	transition: all .5s;
`;



export const PlaceContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const MenuLeft = styled.div`
	display: flex;
	justify-content: space-between;
	width: 190px;
`;

export const MenuPlace = styled.div`
	padding-left: 8px;
`;

export const MenuPanelContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 5px;
	padding-right: 10px;
`;

export const Header = styled.div`
	margin: 0px 10px;
	cursor: pointer;
	&:hover {
		color: #ffffff;
	}
`;


export const MenuButton = styled.div<{ menuView: boolean }>`
	& img {
		transform: ${p => p.menuView ? "rotate(180deg)" : "none"};
		transition: all 0.5s;
		cursor: pointer;
		width: 50px;
	}
`;