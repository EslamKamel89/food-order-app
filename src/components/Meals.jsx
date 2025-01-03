import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";
const requestConfig = { method: "GET" };
/* eslint-disable react/react-in-jsx-scope */
export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     try {
  //       let response = await fetch("http://localhost:3000/meals");
  //       if (!response.ok) {
  //         console.log("Error occured, Status code: " + response.status);
  //         throw Error(" Status code: " + response.status);
  //       }
  //       let meals = await response.json();
  //       setLoadedMeals(meals);
  //       console.log(meals);
  //     } catch (error) {
  //       console.log("Error occured: " + error.message);
  //     }
  //   }
  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (error) {
    return <Error title={"Error Occured"} message={error} />;
  }
  return (
    <>
      {isLoading && <p className="center">Loading data.....</p>}
      {!isLoading && (
        <ul id="meals">
          {loadedMeals?.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      )}
    </>
  );
}
