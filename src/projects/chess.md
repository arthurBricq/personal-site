---
title: Chess Engine in C++
keywords: [Chess, C++]
description: A fully functional Chess Engine written completely from scratch in C++
priority: 2
featuredImage: ../images/chess_engine.png
github: https://github.com/arthurBricq/Roots
---

I have written a fully functional Chess Engine, starting from scratch and using nothing else than the standard library in C++ and SFML for graphics. You can easily try it out in your own computer by compiling the project. 

It was pretty difficult to finish the project, there was many challenges. Here's a few of the highlights of the project
- A lot of optimisation was required. Since a chess engine has to go through millions of positions quickly, you have to think about optimisation, a lot ! It was pretty new for me.
- The data-model has to be efficient, but also, easy to use ! The rules of chess are not so trivial, so they have to be thought along with the data-model
- The tree search of the solver, well, is quite a big tree. I have implemented alpha-beta prunning search, and it works pretty well !
