#!/usr/bin/env python3
""" module of a function"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    "Func to return a tuple"

    return (k, v**2)
