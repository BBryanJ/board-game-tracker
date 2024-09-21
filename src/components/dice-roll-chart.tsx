import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';

interface DiceRollChartProps {
	data: {
		name: string;
		count: number;
	}[];
}

export function DiceRollChart({ data }: DiceRollChartProps) {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart data={data}>
				<XAxis dataKey='name' />
				<YAxis />
				<Bar dataKey='count' fill='#8884d8' />
			</BarChart>
		</ResponsiveContainer>
	);
}
