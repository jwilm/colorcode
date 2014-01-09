#!/bin/bash
STYLES=(autumn borland bw colorful default emacs friendly fruity manni monokai \
  murphy native pastie perldoc rrt tango trac vim vs)

for style in ${STYLES[@]}
  do
    echo "Writing $style.css"
    pygmentize -S "$style" -f html | awk '{ print ".highlight " $0}' > "$style.css"
done
