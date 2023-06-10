import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	gap: 4px;
`;

export const InputField = styled.input`
	width: 100%;

	padding: 8px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;

	&:focus {
		border-color: #007bff;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	}
`;

export const Button = styled.button`
	padding: 8px 12px;
	font-size: 16px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`;
