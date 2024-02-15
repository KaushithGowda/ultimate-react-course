import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      {!name ? (
        <p className="mt-5 text-center text-base font-semibold sm:text-3xl">
          👋 Welcome! Please start by telling us your name:
        </p>
      ) : (
        <p className="mt-5 text-center text-base font-semibold sm:text-3xl">
          👋 Welcome! {name} <br /> Start ordering your favorite food
        </p>
      )}
      {!name && (
        <div className="mt-5 flex items-center justify-center">
          <input
            type="text"
            placeholder="Your full name"
            value={username}
            className="w-72 rounded-full border-2 px-3 py-2 outline-none focus:border-yellow-400"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}
      {name !== "" && username === "" && (
        <div className="mt-5 flex items-center justify-center">
          <Button to={"menu"} btnType={"primary"}>
            Start ordering
          </Button>
        </div>
      )}
      {name === "" && username !== "" && (
        <div className="mt-5 flex items-center justify-center">
          <Button btnType={"primary"}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
