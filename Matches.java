import Person;

public class Matches {
    private HashMap<String, Person> currentMatches = new HashMap<String, HashSet<Person>>();

    public Matches() {
        this.currentMatches = new HashMap<String, HashSet<Person>>();

    }

    public void addPerson(Person p) {
        Boolean match_found = False;
        for (String value : p.choices) {
            if currentMatches.containsKey(value) {
                for (Person temp_person : currentMatches.get(value)) {
                    if (temp_person.email == p.email) {
                        System.out.println("You have tried adding a user who already exists in our database")
                        return;
                    }
                }
                currentMatches.get(value).append(p);
                match_found = True;
                break;
            }
        }

        if (match_found == False) {
            HashSet<Person> tempSet = new HashSet<Person>();
            tempSet.add(p);
            currentMatches.put(p.choices[0], tempSet);
        }

    }
}