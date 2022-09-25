import PropTypes from 'prop-types';
import {
  StatisticsSection,
  SectionTitle,
  StatList,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  <StatisticsSection>
    <SectionTitle>{title}</SectionTitle>

    <StatList>
      {stats.map(({ id, label, percentage }) => {
        <ListItem key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}</Percentage>
        </ListItem>;
      })}
    </StatList>
  </StatisticsSection>;
};
