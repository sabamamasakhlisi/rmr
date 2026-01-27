export default function Header() {
  return (
    <header className="fixed flex flex-col justify-between neg-text text-[13px] h-screen w-2/5 pt-[5rem] pl-[3.125rem] pb-[5rem] z-10 header max-w-[23.75rem]">
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
          <a href="rosamtrbls@gmail.com">email</a>·
          <a href="https://www.instagram.com/rosamtrbls/" target="_blank">
            instagram
          </a>
          ·
          <a href="https://www.linkedin.com/in/rosamtrbls/" target="_blank">
            linkedin
          </a>
        </span>
      </h6>
    </header>
  );
}
