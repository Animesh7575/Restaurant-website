import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'paneer',
    description: 'Main course',
    price: 50,
  },
  {
    id: 'm2',
    name: 'biryani',
    description: 'north indian',
    price: 150,
  },
  {
    id: 'm3',
    name: 'chowmin',
    description: 'chinese',
    price: 125,
  },
  {
    id: 'm4',
    name: 'litti chokha',
    description: 'bihar famous',
    price: 70,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
