---
layout: post
title: "Notes on Computation"
subtitle: "Languages, Lisp, and New Ideas"
date: 2016-06-10
permalink: /computation/
categories: [thoughts]
---

“Computation” is a slippery mathematical idea. In the same way that we 
only glimpse algorithmic complexity by the shadows it casts on time and 
space, we only interact with computation through little  projections 
like “Turing machines” or “Python scripts” that are just tiny peepholes 
into the raw, fluid information-space beyond.

From this obscured view, it’s easy to become nearsighted: to equate 
“code” with “text in a file” or “programming” with “writing JavaScript 
in an IDE” without seeing the dizzying mathematical scope of the power 
we play with so casually. 

I intended this piece to be a sweeping manifesto. I set out to 
vindicate Lisp as – empirically – the most pure, righteous encoding of 
computation that humanity has ever discovered, and to strike down with 
furious anger those who seek to marginalize it as “obtuse” or 
“unintuitive”.

But it turns out that reality is complicated, and things rarely work 
to cleanly justify any radical ideology. So if, at the end of this, you
feel a vague sense of frustration with the world, but without any
particularly strong direction or conviction, that's because I feel the 
same way.

![Inception]({{ site.url }}/assets/images/inception.jpg)

# Shannon's Counting Argument

## "Naming a thing gives you power over it"

Every function over binary inputs can be modeled with a circuit of 
primitive logic gates, like AND/OR/NOT or NAND. Some functions, like a 
bitwise AND, are really easy to model with circuits, and can be 
constructed with a number of gates that is linear in the size of the 
input. Other functions are a little less friendly, and need a polynomial 
number of gates to model.

But there are *a lot* of possible functions. Even just considering boolean 
operations (that output only one bit), there are `2`<sup>`2`<sup>`n`</sup></sup> distinct 
mappings over `n` inputs. This absolutely dwarfs the `ϴ(2`<sup>`n`</sup>`)` functions you 
can model with `n` logic gates, which means that there just isn’t space 
for every function to have a polynomial-sized circuit. In fact, the vast 
majority of functions have to be content with enormous, exponentially 
huge circuits.

What’s weird is that even though we know that almost all boolean 
functions require exponentially large circuits, *we don’t know what any 
of them are*. Everything that we have a name for – every point in 
concept-space that humanity has ever touched – either fits into a 
polynomial circuit or has yet to be proven. 
[We're not even sure](https://en.wikipedia.org/wiki/Circuit_complexity#History) 
if NP-complete problems like SAT or EXPTIME-complete problems like Go 
need exponentially large circuits!

The same counting argument applies to programming languages. While Lisp 
may be touted as pure revelation of functional enlightenment that 
encapsulates the true essence of computing, the disappointing reality is 
that the space of computation is just too big for any encoding – even 
lambda calculus – to efficiently capture anything more than an 
exponentially tiny fraction of it. Every language is good at succinctly
describing a small set of ideas, but there are just too many things that 
you could want to do with a computer for any language to be good at 
expressing all of them.

Rather tautologically, we don’t have any examples of things we don’t 
know to describe. But the fact that they have to exist – and that there 
are so many of them – should bother us.

It’s eerie: it doesn’t feel like we’re missing out, but the vast 
majority of possible “things” (functions, transformations, ideas) just 
haven’t been thought of, ever. It’s possible that they haven’t been 
thought of because they’re inherently nonsensical, random contortions of 
math that wouldn’t be useful, but I think it’s because we don’t have the 
right language to understand their significance. There might be a 
language in which AND is exponentially difficult to describe, but a 
brand new set of thoughts that elude us now become trivial. There could 
be world-changing, paradigm-shifting ideas hiding in the exponential 
shadows! We have the Turing-complete keys to unlock the entire 
computation-space, but we only see the polynomial tip of the 
computational iceberg. So why don't we explore?

> "Most creativity is a transition from one context into another where 
  things are more surprising. There’s an element of surprise, and 
  especially in science, there is often laughter that goes along with 
  the “Aha.” Art also has this element. Our job is to remind us that 
  there are more contexts than the one that we’re in — the one that we 
  think is reality." -- Alan Kay


# Goodhart's Law

## "When a measure becomes a target, it ceases to be a good measure"

The SAT was momentarily a good test (this is the Scholastic Aptitude 
Test for now, not Satisfiability). Its purpose was to evaluate “college 
readiness”, and it was good at it. Even though the content of the test, 
like obscure vocabulary knowledge, wasn’t directly related to college 
readiness itself, the two were so closely correlated that they became 
interchangeable for evaluation purposes.

But! Abstractions leak, and systems interfere with each other. Quickly, 
students began to buy practice books and started memorizing obscure 
vocabulary directly, without the trouble of readying for college 
beforehand. Those convenient proxies that used to be correlated with 
college readiness became gameable, and the thing that the SAT really 
tested stopped being “college readiness” and became “proficiency at 
taking SAT tests”.

![Help!]({{ site.url }}/assets/images/tech_loops.png)

At first glance, ignoring the exponential majority of the “things” in 
the computation-verse might seem insignificant – after all, we’ve 
carefully designed our programming languages to expose everything 
imaginably useful through simple, human-readable metaphors like Objects 
or Functions. In fact, we’ve honed and sharpened these languages over 
dozens of iterations to be *really good* at manipulating functions and 
objects and classes and strings and APIs.

But in the same way that the SAT mutated the system it was designed to 
evaluate through pressure from college admissions, I think that the 
computer science field is no longer about exploring computation, but 
rather about getting better and faster at the things with which we’re 
already familiar, through commercial incentives. While this is fine and 
admirable and even necessary for practical, real-world implementation, 
I think we’ve completely lost sight of the scope of the ideas that could 
be waiting to be discovered.

But who needs new ideas when there’s SEO and user engagement to 
optimize? Why would we need new languages when the ones we have are
perfectly good at 
[dark UI patterns](https://medium.com/@tristanharris/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3)
and 
[addictive conditioning](http://www.theverge.com/2016/1/4/10708590/facebook-google-android-app-crash-tests)?

> “The most dangerous thought that you can have as a creative person is
  to think that you know what you’re doing. Because once you think you
  know what you’re doing, you stop looking around for other ways of
  doing things.” -- Bret Victor


# Propagation of Constraints

## I don't know who discovered water, but it wasn't a fish

Constraints inspire creativity and give structure to ideas. Even if a
universally expressive, unbiased programming language existed, it would
likely be impossible to use. Perfection breeds paralysis.

![]({{ site.url }}/assets/images/ex-machina.jpg)

> "What if Pollock said, 'You know what? I can't paint anything, 
  unless I know exactly why I'm doing it.' What would have happened?"
  <br><br>
  "He never would have made a single mark."

In this sense, the languages that we use do a wonderful job of framing
computation through structured models and metaphors that let us easily
think in "modes" and not have to create everything from a vacuum. We
learn templates of problem-solving, like "object inheritance" or "graph
search" that we use as building blocks to compose and apply to any domain.

But if the most dangerous thought is to think you know what you're doing,
the second-most dangerous must be to think you know what something is,
because then you stop looking around for other things that it could be.

What's dangerous about some models is that, like a fish in water, we
spend our entire lives immersed in them, and don't realize that they're
just models. This results in some constraints, born out of necessity in
the implementation of some abstraction layer, that infect the mindset of
the programmers

If Turing-completion is good for anything, we should be able to prune
previous restriction and become more flexible, yet relics of the
constraints of lower levels are everywhere.

Code and data are separated only because of the physical
distinction of circuits and the electricity that flows through them,
but there's no mathematical difference between information and a
transformation thereof. Yet we're still wiring static, compiled
programs that are essentially glorified circuit schematics!

Meanwhile, we haven't needed keyboards since the invention of the
touchscreen, but every interaction with a computer is still funneled
through a ridiculously constricting, serialized text stream. There are
millions of pixels in our screens, and we can make any of them do
anything at any time, but their most common use is to display the same
alphabet that has been around for millennium. We have the technology to
create a fully dynamic creative medium, but we're still writing static emails
and reading dead, flat PDFs functionally identical to the paper that
preceded them.

Iterative development cycles are prone to the same system inference that
the college admissions/SAT test loop suffers from. C was made to be a 
better Assembly, not an expressive language. 

# The Art of New Ideas

## Towards a Higher Dimensional Space

Last semester at MIT I had the adventure of taking 6.945: Large-scale
Symbolic Systems from the infamous Prof. Gerald Jay Sussman, co-author 
of SICP, SICM, Scheme, and the Lambda Papers, and fashion pioneer of 
pocket protectors and wizard hats.

It's one thing to read about the history of Lisp, but it's another thing 
to hear Sussman tell it himself. Not only do you get irresistibly
excited by his energy (which is surprisingly radiant), but he delivers 
context and surrounding perspective that usually gets sidelined.

One of the many surprises in the Lisp story that Sussman loves to emphasize 
is that it wasn't designed
*as* a programming language by some task force of academics. Instead,
McCarthy dreamed it up as a notation for mathematical proofs - a syntax
for statements that could be easily assigned Gödel numbers, and 
be evaluated reasonably simply by hand. Compilers were thought to take
years to build at the time, and McCarthy was shocked when a student 
implemented a simple evaluator on an actual computer in just a few days.

Lisp gave us first-class functions, continuations, and the idea of code
as data - only one of which has now finally become mainstream. Is it any 
surprise that the 
"[the greatest single programming language ever designed](https://lispers.org/)"
wasn't actually designed, but rather *discovered*? That its throne as 
the "the most intelligent way to misuse a computer" that has
"assisted a number of our most gifted fellow humans in thinking 
previously impossible thoughts" was born out of a happy accident in a
mathematical vacuum?

This isn't to say that Lisp is the ultimate programming language - far 
from it! Lisp suffers from the same counting argument as any other 
encoding. But it is a *different* language. And that random kernel of
difference frames a unique model of computation that is easily missed
on the narrow mainstream path.


