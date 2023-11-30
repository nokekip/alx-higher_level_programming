#!/usr/bin/python3

"""Module containing the find_peak function."""


def find_peak(list_of_integers):
    """Find a peak in a list of unsorted integers."""
    if not list_of_integers:
        return None

    if len(list_of_integers) == 1:
        return list_of_integers[0]

    list_of_integers.sort()
    peak = list_of_integers[-1]
    return peak
