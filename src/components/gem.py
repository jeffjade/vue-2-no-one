import sys

def generate(filename):
    for i in range(5):
        print(filename)
    return "airplane00.png", "beach00.png", "buildings00.png"

if __name__ == "__main__":
    generate(sys.argv[1])