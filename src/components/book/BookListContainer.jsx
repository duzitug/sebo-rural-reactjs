import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";
import useGetResource from "../../utils/useGetResource";
import usePostResource from "../../utils/usePostResource";

//TODO add custom hook for post?
function BookListContainer() {
  const books = useGetResource(
    "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/books.json"
  );

  // const token = usePostResource(
  //   "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
  //   { email: "merciofilho@gmail.com", password: "123" }
  // );

  // useEffect(() => {
  //   axios
  //     .post(
  //       "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
  //       { email: "merciofilho@gmail.com", password: "123" }
  //     )
  //     .then(function (resposta) {
  //       return console.log(resposta.data.token);
  //     });
  // }, []);

  return (
    <>
      <MiniDrawer>
        <MediaCardListGrid elements={books} />
      </MiniDrawer>
    </>
  );
}

export default BookListContainer;
