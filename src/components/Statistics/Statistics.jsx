import PropTypes from 'prop-types';
import colorRandomizer from '../../colorRandomizer';
import {
  StatSection,
  Title,
  Stats,
  StatItem,
  StatLabel,
  StatNumber,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <Stats>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: colorRandomizer(),  }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatNumber>{stat.percentage}%</StatNumber>
          </StatItem>
        ))}
      </Stats>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
