import React from "react";
import Button from "../../../components/ui/Button";
import EditIcon from "./../../../assets/icons/edit.svg";

function HomeDetails() {
  return (
    <section className="home-details__container">
      <h1 className="title">
        We’re <br /> The Water People
      </h1>
      <p className="description">
        Discover elegance with our custom-labeled bottled water, perfect for
        adding a personal <br />
        touch to any event or brand. Quality meets style for a truly refreshing
        experience.
      </p>
      <Button
        link={"/twp/contact-us"}
        text="Get a Quote"
        className="home-details__btn"
        icon={EditIcon}
      />
    </section>
  );
}

export default HomeDetails;
