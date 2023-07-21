import ReadMoreLess from './ReadMoreLess';
import React from 'react';
import '@or.ds.e/scss/lib/ReadMoreLess.css';
import '@or.ds.e/scss/lib/Text.css';
import { text, number } from '@storybook/addon-knobs';

export default {
  title: 'Molecules/ReadMoreLess',
};

export const Common = () => (
  <ReadMoreLess max={1000}>
    {text(
      'Text',
      ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos nam sint
        possimus reiciendis obcaecati nobis necessitatibus facere minima eum ipsum
        aliquid quidem suscipit qui id, soluta eius inventore odit placeat eveniet
        ea, repellat ab quas. Corporis unde, laborum omnis tempore aperiam provident
        officia nemo dicta sit totam assumenda. Quaerat, corrupti hic? Eveniet aut
        aliquam error pariatur eligendi sint, necessitatibus iure recusandae et
        deserunt exercitationem dolor dolore soluta! Fugit animi tenetur saepe,
        necessitatibus tempore pariatur quidem unde accusantium eaque voluptatem
        voluptates reiciendis, perspiciatis ratione ad minima vitae maiores dolores
        itaque vel aliquid minus distinctio error possimus eligendi! Magnam vel
        labore tempora quia numquam dolores qui deleniti nisi saepe? Autem ratione
        inventore assumenda harum? Molestias nam odio architecto et obcaecati
        assumenda quibusdam pariatur totam sit adipisci, quo tempora aut eveniet
        minus, asperiores animi necessitatibus veniam reprehenderit quam ratione,
        earum quis consectetur. At fugiat in libero hic tempora obcaecati, adipisci
        quis quos asperiores autem ratione molestias laudantium perferendis rem.
        Animi voluptates dolores nemo neque fuga quisquam nobis aliquam quos
        inventore reiciendis, est atque quam consectetur dignissimos alias earum
        ratione fugiat eum saepe id nulla. Vitae saepe expedita enim veritatis esse
        ratione provident ullam cupiditate, rem fuga quas veniam at assumenda id
        corrupti.`,
    )}
  </ReadMoreLess>
);

export const WithCustomLimits = () => (
  <ReadMoreLess min={number('Min', 0)} max={number('Max', 1000)}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos nam sint
    possimus reiciendis obcaecati nobis necessitatibus facere minima eum ipsum
    aliquid quidem suscipit qui id, soluta eius inventore odit placeat eveniet
    ea, repellat ab quas. Corporis unde, laborum omnis tempore aperiam provident
    officia nemo dicta sit totam assumenda. Quaerat, corrupti hic? Eveniet aut
    aliquam error pariatur eligendi sint, necessitatibus iure recusandae et
    deserunt exercitationem dolor dolore soluta! Fugit animi tenetur saepe,
    necessitatibus tempore pariatur quidem unde accusantium eaque voluptatem
    voluptates reiciendis, perspiciatis ratione ad minima vitae maiores dolores
    itaque vel aliquid minus distinctio error possimus eligendi! Magnam vel
    labore tempora quia numquam dolores qui deleniti nisi saepe? Autem ratione
    inventore assumenda harum? Molestias nam odio architecto et obcaecati
    assumenda quibusdam pariatur totam sit adipisci, quo tempora aut eveniet
    minus, asperiores animi necessitatibus veniam reprehenderit quam ratione,
    earum quis consectetur. At fugiat in libero hic tempora obcaecati, adipisci
    quis quos asperiores autem ratione molestias laudantium perferendis rem.
    Animi voluptates dolores nemo neque fuga quisquam nobis aliquam quos
    inventore reiciendis, est atque quam consectetur dignissimos alias earum
    ratione fugiat eum saepe id nulla. Vitae saepe expedita enim veritatis esse
    ratione provident ullam cupiditate, rem fuga quas veniam at assumenda id
    corrupti.
  </ReadMoreLess>
);

export const WithCustomButtons = () => (
  <ReadMoreLess
    max={1000}
    readMoreText={text('Read more text', 'custom read more')}
    readLessText={text('Read less text', 'custom read less')}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos nam sint
    possimus reiciendis obcaecati nobis necessitatibus facere minima eum ipsum
    aliquid quidem suscipit qui id, soluta eius inventore odit placeat eveniet
    ea, repellat ab quas. Corporis unde, laborum omnis tempore aperiam provident
    officia nemo dicta sit totam assumenda. Quaerat, corrupti hic? Eveniet aut
    aliquam error pariatur eligendi sint, necessitatibus iure recusandae et
    deserunt exercitationem dolor dolore soluta! Fugit animi tenetur saepe,
    necessitatibus tempore pariatur quidem unde accusantium eaque voluptatem
    voluptates reiciendis, perspiciatis ratione ad minima vitae maiores dolores
    itaque vel aliquid minus distinctio error possimus eligendi! Magnam vel
    labore tempora quia numquam dolores qui deleniti nisi saepe? Autem ratione
    inventore assumenda harum? Molestias nam odio architecto et obcaecati
    assumenda quibusdam pariatur totam sit adipisci, quo tempora aut eveniet
    minus, asperiores animi necessitatibus veniam reprehenderit quam ratione,
    earum quis consectetur. At fugiat in libero hic tempora obcaecati, adipisci
    quis quos asperiores autem ratione molestias laudantium perferendis rem.
    Animi voluptates dolores nemo neque fuga quisquam nobis aliquam quos
    inventore reiciendis, est atque quam consectetur dignissimos alias earum
    ratione fugiat eum saepe id nulla. Vitae saepe expedita enim veritatis esse
    ratione provident ullam cupiditate, rem fuga quas veniam at assumenda id
    corrupti.
  </ReadMoreLess>
);
