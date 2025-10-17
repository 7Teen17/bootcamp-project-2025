export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <img
        src="h4i_me.jpg"
        alt="Cal Poly Logo, Learn by Doing"
        className="size-100 rounded-full"
      />
      <div className="text-center pt-12 text-xl text-white">
        <p>
          <strong>Hello!</strong> My name is
          <strong> Dominic Siino</strong> and I am a Computer Science major at
          <em> Cal Poly SLO</em>.
        </p>
        <p>
          Currently, I am learning how to make websites for the
          <strong> Hack4Impact</strong> club.
          <br />
          In fact, this is my first ever website!
        </p>
        <p>
          I have <strong>5+ years</strong> experience with Python, and I am
          comfortable with <em>APIs and SQL</em>. I am super excited
          <br />
          to learn about full-stack development!
        </p>
        <p>
          I love biking and playing piano and spikeball, as well as pretty much
          any sport.
        </p>
      </div>
    </div>
  );
}
