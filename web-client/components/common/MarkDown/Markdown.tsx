import React from 'react';
import ReactMarkdown from 'react-markdown';

interface IProps {
	children: any;
}

const Markdown = ({ children }: IProps) => {
	return <ReactMarkdown>{children}</ReactMarkdown>;
};

export default Markdown;
