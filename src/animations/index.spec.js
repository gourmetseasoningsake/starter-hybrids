import test from 'ava';
import sinon from 'sinon';



import { gsap } from 'gsap';
import { anim } from './index.js';



const timeline = gsap.timeline();
const element = document.createElement('div');



const stubTimeline =
  tl =>
  sinon
  .stub(tl, 'then')
  .returns(Promise.resolve('resolved'));



test(

  'anim : with fn, fn with node, returning IO Object',

  async t => {
    const f = anim(xs => timeline);
    const tl = f(element).run();

    stubTimeline(tl);

    t.is(await tl.then(), 'resolved');
  }

);



test(

  'anim : with fn, fn with Array node, returning IO Object',

  async t => {
    const f = anim(xs => timeline);
    const tl = f([element]).run();

    stubTimeline(tl);

    t.is(await tl.then(), 'resolved');
  }
);



test(

  'anim : with fn, fn with Array, returning IO Object',

  async t => {
    const f = anim(xs => timeline);
    const tl = f([]).run();

    stubTimeline(tl);

    t.is(await tl.then(), 'resolved');
  }

);



test(

  'anim : without fn, fn with node, returning IO Object',

  async t => {
    const f = anim(null);
    const tl = f(element).run();

    stubTimeline(tl);

    t.is(await tl.then(), 'resolved');
  }

);



test(

  'anim : with fn, fn without node, returning IO Object',

  async t => {
    const f = anim(xs => timeline);
    const tl = f(null).run();

    stubTimeline(tl);

    t.is(await tl.then(), 'resolved');
  }

);



test(

  'anim : without fn, fn without node, returning IO Object',

  async t => {
    const f = anim(null);
    const tl = f(null).run();

    stubTimeline(tl);

    t.is(await tl.then(), 'resolved');
  }

);
