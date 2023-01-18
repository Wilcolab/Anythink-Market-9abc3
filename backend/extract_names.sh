#!/bin/sh

filename=$0
data=$1

final=$(cat file1.txt)
if [ -n "$final" ]; then
    printf '%s\n' "$final" 
else
    printf 'Passed\n'
fi