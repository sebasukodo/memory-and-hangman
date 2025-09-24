import sys

# convert txt file to words for hangman - added in 2025

def main():
    try:

        if len(sys.argv) != 2:
            print("Usage: python3 convert_txt <file_path>")
            exit(1)

        all_words = open(sys.argv[1], "r")  

        filtered_words = []
        for word in all_words:
            if " " in word or "-" in word or "ö" in word or "ä" in word or "ü" in word or "ß" in word:
                continue   
            if "\n" in word:         
                filtered_words.append(f"'{word[:-1]}'")
            else:
                filtered_words.append(f"'{word}'")

        new_words = "let woerter = [" + ",".join(filtered_words) + "]"
        file = open("hangman_words.js", "w")
        file.write(new_words)

    except Exception as e:
        print(f"Cannot read file {sys.argv[1]}: {e}")

if __name__ == "__main__":
    main()