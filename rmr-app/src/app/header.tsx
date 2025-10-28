export default function Header() {
  return (
    <header className="fixed flex flex-col justify-between neg-text h-screen w-2/5 pt-[3.125em] pl-[3.125em] pb-[3.125em] z-10">
      <h3>
        <span className="font-bold">
          ¡Hola! My name is Rosa and I’m a creative and visual designer.
        </span>
        Moving across disciplines, learning and having fun, this is but a
        selection of my projects, creations and hyper fixations. Welcome.
      </h3>
      <h6>
        <p>If you want to know more, let’s talk!</p>
        <span>
          <a href="">email</a>·<a href="">instagram</a>·<a href="">linkedin</a>
        </span>
      </h6>
    </header>
  );
}
