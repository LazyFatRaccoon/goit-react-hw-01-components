import React from 'react'
import css from "./Statistics.module.css"
import PropTypes from 'prop-types'

const Statistics = ({title, stats}) => {
    
    return <section className={css.statistics}>
    {title && <h2 className={css.title}>Upload stats</h2>}
    
    <ul className={css.statList}>
       { stats.map((stat) => {return <li key={stat.id} className={css.item} style={{backgroundColor: randomColor()}}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}</span>
      </li>}) }
      
    </ul>
  </section>

}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }
    ))
}


function randomColor() {
    const element = Math.floor(Math.random()*colors.length);
    const color = colors[element];
    colors.splice(element,1)
    return color
}

const colors = ['#b9849e', '#26928f', '#9bd512', '#f12715', '#12669c', '#902eff', '#63938b', '#636ba4', '#1673b0', '#e51984']

export default Statistics;
