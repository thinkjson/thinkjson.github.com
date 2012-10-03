#!/usr/bin/python
import json, random

while True:
    try:
        obj = {
            "room": random.randint(100, 500),
            "zipcode": "%05d" % random.randint(9999, 99999),
            "length_of_stay": random.randint(1, 14),
            "num_guests": random.randint(1, 5),
            "reward_program": random.randint(0, 10) < 3,
            "has_pet": random.randint(0, 10) < 3,
        }
        obj["age"] = random.randint(20, 70) + 2 * obj['length_of_stay']
        print json.dumps(obj)
    except IOError:
        break