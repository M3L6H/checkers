# Checkers

<p align="center">
  <a href="https://opensource.org/licenses"><img src="https://img.shields.io/badge/License-GPL%20v3-yellow.svg" alt="GPL v3" /></a>
  <a href="https://github.com/M3L6H/checkers/commits"><img src="https://img.shields.io/github/commit-activity/m/M3L6H/checkers?foo=bar" alt="Commits" /></a>
  <a href="https://github.com/M3L6H/checkers/issues"><img src="https://img.shields.io/github/issues-raw/M3L6H/checkers.svg?maxAge=25000" alt="Issues" /></a>
  <a href="https://github.com/M3L6H/checkers/pulls"><img src="https://img.shields.io/github/issues-pr/M3L6H/checkers.svg?style=flat" alt="GitHub pull requests" /></a>
  <a href="https://m3l6h.github.io/checkers-docs"><img src="https://img.shields.io/github/deployments/M3L6H/checkers-docs/github-pages?label=docs" alt="Docs" /></a>
  <a href="https://github.com/M3L6H/checkers/actions?query=workflow%3ACI"><img src="https://img.shields.io/github/workflow/status/M3L6H/checkers/CI" alt="Build status"/></a>
  <a href="https://codecov.io/gh/M3L6H/checkers"><img src="https://codecov.io/gh/M3L6H/checkers/branch/master/graph/badge.svg" alt="Code coverage" /></a>
  <a href="https://m3l6h.github.io/checkers"><img src="https://img.shields.io/github/deployments/M3L6H/checkers/github-pages?label=deployment" alt="Deployment" /></a>
</p>

The goal of this project is to implement a Checkers AI with the minimax
algorithm and alpha-beta pruning.

This is to serve as a learning project for myself and a place to document my
findings.

## Important Links

- [Click here for the github repository.](https://github.com/M3L6H/checkers)
- [Click here for the project documentation.](https://m3l6h.github.io/checkers-docs/)

## About

[Checkers](https://en.wikipedia.org/wiki/Draughts) is a strategy game involving
two players. The players take turns to move their pieces diagonally across an
8x8 board. The objective of the game is to capture all of your opponent's
pieces.

[Minimax](https://en.wikipedia.org/wiki/Minimax) is an algorithm that builds out
a decision tree from the current game position with a specified depth, and then
evaluates the tree picking the best move for each player at any given point. It
then uses the evaluation to decide on a move to take at the current point in the
game.

Alpha-beta pruning is an optimization on minimax that prunes branches in the
tree that would never be chosen - assuming best play from both sides. A helpful
video giving an overview of these concepts can be found
[here](https://www.youtube.com/watch?v=l-hh51ncgDI&ab_channel=SebastianLague).
