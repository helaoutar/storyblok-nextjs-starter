import Components from "./index";
import SbEditable from "storyblok-react";

const Page = (props) => {
  return (
    <SbEditable content={props.content}>
      {props.content.body.map((blok) => (
        <SbEditable content={blok} key={blok._uid}>
          <section key={`${props.uuid}-${blok._uid}`}>
            {Components(blok, props.uuid)}
          </section>
        </SbEditable>
      ))}
    </SbEditable>
  );
};

export default Page;
