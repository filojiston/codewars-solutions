package kata

import (
	"fmt"
	"regexp"
	"strings"
)

var dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n" + "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n" + "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n" + "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n" + "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n" + "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n" + "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n" + "<Anastasia> +48-421-674-8974 Via Quirinal    Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n" + "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n" + "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n" + "<P Salinge> Main Street, +1-098-512-2222, Denve\n" + "<P Salinge> Main Street, +1-098-512-2222, Denve\n"

func Phone(dir, num string) string {
	directory := strings.Split(dir, "\n")
	found := make([]string, 0)
	for _, line := range directory {
		phone, name, address := getInformationFromLine(line)
		if phone == num {
			found = append(found, fmt.Sprintf("Phone => %s, Name => %s, Address => %s", phone, name, address))
		}
	}

	if len(found) == 0 {
		return fmt.Sprintf("Error => Not found: %s", num)
	} else if len(found) > 1 {
		return fmt.Sprintf("Error => Too many people: %s", num)
	}

	return found[0]
}

func getInformationFromLine(line string) (phone, name, address string) {
	if line == "" {
		return "", "", ""
	}

	phoneStartIdx := strings.Index(line, "+")
	if line[phoneStartIdx+2] == '-' {
		phone = line[phoneStartIdx : phoneStartIdx+15]
	} else {
		phone = line[phoneStartIdx : phoneStartIdx+16]
	}

	nameStartIdx := strings.Index(line, "<")
	nameEndIdx := strings.Index(line, ">")
	name = line[nameStartIdx : nameEndIdx+1]

	line = strings.Replace(line, phone, "", -1)
	line = strings.Replace(line, name, "", -1)

	reg, err := regexp.Compile("[^a-zA-Z0-9-_. ]+")
	if err != nil {
		return "", "", ""
	}

	line = reg.ReplaceAllString(line, "")
	line = strings.TrimSpace(line)
	others := regexp.MustCompile(`\s+`)
	line = others.ReplaceAllString(line, " ")
	others = regexp.MustCompile(`[_]`)
	line = others.ReplaceAllString(line, " ")

	return phone[1:], name[1 : len(name)-1], line
}

func main() {
	fmt.Println(Phone(dr, "48-421-674-8974"))
	fmt.Println(Phone(dr, "1-921-512-2222"))
	fmt.Println(Phone(dr, "1-908-512-2222"))
	fmt.Println(Phone(dr, "1-541-754-3010"))
	fmt.Println(Phone(dr, "1-121-504-8974"))
	fmt.Println(Phone(dr, "1-498-512-2222"))
	fmt.Println(Phone(dr, "1-098-512-2222"))
	fmt.Println(Phone(dr, "5-555-555-5555"))
}
