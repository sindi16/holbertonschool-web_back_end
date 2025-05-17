#!/usr/bin/env python3
""" module of a function"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    "Func to return a sum"
    sum = 0
    for elem in mxd_lst:
        sum += elem
    return float(sum)
