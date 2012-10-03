#!/usr/bin/python
from mrjob.job import MRJob
from mrjob.protocol import JSONValueProtocol

class HotelMapReduce(MRJob):
    INPUT_PROTOCOL = JSONValueProtocol
    def mapper(self, _, line):
        yield line.get('length_of_stay'), line.get('age')
    def reducer(self, key, values):
        total, count = 0.0, 0
        for value in values:
            total += value
            count += 1
        yield key, total/count
if __name__ == '__main__':
    HotelMapReduce.run()