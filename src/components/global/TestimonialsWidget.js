import React from 'react';

import { Icon } from './Icon';

export const TestimonialsWidget = () => {
  const testimonials = [
    {
      name: 'Audrey Nimura',
      content: "Katie is an exceptional professional who writes beautifully, wittily and brilliantly through her gifts as a writer and observer of trends, attitudes and the general zeitgeist. It's a joy to read her writing and behind the words is a work ethic and commitment to detail and deadlines, nonpareil."
    },
    {
      name: 'Jeff Levy',
      content: 'Wonderful editor, met all deadlines and always came in with wonderful issues despite tight budgets. Strong work ethic. Highly recommended!'
    }
  ];

  const buildTestimonial = (testimonial) => (
    <section className='testimonialsWidget-testimonial'>
      <article>
        <Icon name='icon-star' classes='testimonialsWidget-testimonial-star' />
        <Icon name='icon-star' classes='testimonialsWidget-testimonial-star' />
        <Icon name='icon-star' classes='testimonialsWidget-testimonial-star' />
        <Icon name='icon-star' classes='testimonialsWidget-testimonial-star' />
        <Icon name='icon-star' classes='testimonialsWidget-testimonial-star' />
      </article>
      <p>{testimonial.content}</p>
      <div className='testimonialsWidget-testimonial-divider'></div>
      <span className='testimonialsWidget-testimonial-name'>{testimonial.name}</span>
    </section>
  );

  return (
    <section className='testimonialsWidget'>
      {buildTestimonial(testimonials[0])}
    </section>
  );
};