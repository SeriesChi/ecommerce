interface IconProps {
	Component: any;
	color?: string | undefined;
	size?: string | number | undefined;
	title?: string | undefined;
}

interface IconsProps {
	icon: IconProps;
	style?: Record<string, string>;
	className?: string;
}

const defaultStyle = {
	marginLeft: "5px",
	marginRight: "5px",
};

export const IconComponent = (props: IconsProps) => {
	const { icon, style, className } = props;
	const { Component, color, size } = icon;
	let customStyle = style || {};
	return (
		<Component
			className={className || ""}
			color={color || undefined}
			size={size || undefined}
			style={{ ...defaultStyle, ...customStyle } || style}
		/>
	);
};
