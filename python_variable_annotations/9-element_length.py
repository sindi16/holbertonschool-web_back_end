#!/usr/bin/env python3
""" module of a function"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    "Func to return a list"

    return [(i, len(i)) for i in lst]
