import React from "react";
import {
	MenuWrapper,
	ItemsLeft,
	List,
	ListElement,
	ButtonClear,
} from "./Menu.styles";
import { Patterns } from "../../enums/Patterns.enum";

interface MenuProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	activeTodo: number;
	onClearCompleted: () => void;
	onFilter: (pattern: string) => void;
}

const Menu = ({
	activeTodo,
	onClearCompleted,
	onFilter,
}: MenuProps): React.JSX.Element => {
	return (
		<MenuWrapper>
			<ItemsLeft>{activeTodo} items left</ItemsLeft>
			<List>
				<ListElement onClick={() => onFilter(Patterns.ALL)}>All</ListElement>
				<ListElement onClick={() => onFilter(Patterns.ACTIVE)}>
					Active
				</ListElement>
				<ListElement onClick={() => onFilter(Patterns.COMPLETED)}>
					Completed
				</ListElement>
			</List>
			<ButtonClear onClick={onClearCompleted}>Clear completed</ButtonClear>
		</MenuWrapper>
	);
};

export default Menu;
