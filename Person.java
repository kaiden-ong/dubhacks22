import java.util.ArrayList;

public class Person {
    private String name;
    private String email;
    private ArrayList<String> choices;

    public Person() {
        this.name = "";
        this.email = "";
        this.choices = new ArrayList<String>();
    }

    public Person(String name, String email, ArrayList<String> choices) {
        this.name = name;
        this.email = email;
        this.choices = choices;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getChoices() {
        return choices;
    }

    public void setChoices(ArrayList<String> choices) {
        this.choices = new ArrayList<String>(choices);
    }
}