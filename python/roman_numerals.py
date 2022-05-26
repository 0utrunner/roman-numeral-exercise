def to_roman(num):
    result = []
    arabic_number = num
    roman = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    for key in roman:
        evenly_divisible = int(arabic_number / roman[key])
        if evenly_divisible >= 1:
            for x in range(evenly_divisible):
                result.append(key)
                arabic_number = arabic_number - roman[key]
    return (''.join(result))

print(to_roman(5))