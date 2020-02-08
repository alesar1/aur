import cmath, sys

if len(sys.argv) != 4:
    print("Please enter a, b, and c as arguments.")


else:

    a = float(sys.argv[1])
    b = float(sys.argv[2])
    c = float(sys.argv[3])

    print('a is', a, 'b is', b, 'c is', c)

    d = (b ** 2) - (4 * a * c)

    sol0 = (-b - cmath.sqrt(d)) / (2*a)
    sol1 = (-b + cmath.sqrt(d)) / (2*a)

    print("X could be", sol0, "or", sol1)
