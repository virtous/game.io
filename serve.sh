RED="\e[31m"
NC="\e[0m"

if ! command -v deno &> /dev/null ; then
    echo -e "[${RED}Error${NC}]: 'deno' is not installed on your local machine"
    echo -e "[${RED}Error${NC}]: PLease install it first then execute the file again"
    echo -e "[${RED}Error${NC}]: Aborting..."
    exit
fi

deno run -A --quiet ./index.ts