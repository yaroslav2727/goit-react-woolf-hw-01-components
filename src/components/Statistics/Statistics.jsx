import { StatisticsMenu, Title, StatList, StatItem, Percentage, Label } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsMenu $amount={stats.length}>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsMenu>
  );
};
