const Location = () => {
  return (
    <>
      <h4 className="custom-header">Visiting QACinema</h4>
      <div className="flex justify-center">
        <iframe
          className="border-4 px-5 pb-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.4580070363163!2d-2.241031360973307!3d53.47814586497144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c0075e17d5%3A0x85d429dd2470475e!2sManchester%20One!5e0!3m2!1sen!2suk!4v1684315130690!5m2!1sen!2suk"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="location-map"
        ></iframe>
      </div>
    </>
  );
};

export default Location;
