import React from "react";

const Detail = (props) => {
  React.useEffect(() => {
    const { location, history } = props;
    if (location.state === undefined) {
      history.push("/");
    }
  });

  const { location } = props;
  console.log(location.state);
  if (location.state) {
    return <span>{location.state.movie.title}</span>;
  } else {
    return null;
  }
};

export default Detail;
