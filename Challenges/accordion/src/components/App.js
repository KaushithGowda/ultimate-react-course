import '../index.css';
import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data?.length > 0 &&
        data.map((item, index) => (
          <AccordionItem
            title={item.title}
            index={index}
            key={item.title}
            curOpen={curOpen}
            setCurOpen={setCurOpen}
          >
            {item.text}
          </AccordionItem>
        ))}
    </div>
  );
}

function AccordionItem({ index, title, curOpen, setCurOpen, children }) {
  const isOpen = curOpen === index;
  return (
    <div
      className={`item ${isOpen ? 'open' : ''}`}
      onClick={() => setCurOpen(() => (index === curOpen ? null : index))}
    >
      <span className="number">{index < 9 ? `0${index}` : index}</span>{' '}
      <span className="title">{title}</span>
      <span className="icon">{isOpen ? '-' : '+'}</span>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}

export default App;
