import styled from "styled-components";

export const MenuWrapper = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;

	font-size: 16px;
`;

export const ItemsLeft = styled.p`
	color: #8aa7d4;
`;

export const List = styled.ul`
	display: flex;
	gap: 20px;

	list-style: none;
`;

export const ListElement = styled.li`
	padding: 4px;
	color: #007bff;
	border: 1px solid rgba(0, 123, 255, 0.25);

	cursor: pointer;
`;

export const ButtonClear = styled.button`
	color: #007bff;
	background: none;
	border: none;

	font-size: 16px;
	cursor: pointer;
`;
