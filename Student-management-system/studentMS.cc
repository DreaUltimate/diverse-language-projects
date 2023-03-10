class Student {
    int rollno;
    char name[50];
    int marks[6];
public:
    void read();
    void display();
    void write();
    void read_file();
    bool validate_rollno(int rollno);
    bool validate_marks(int marks[]);
};

void Student::read() {
    cout << "\nEnter Roll number: ";
    cin >> rollno;
    if (!validate_rollno(rollno)) {
        cout << "Invalid Roll Number! Please Try Again." << endl;
        return;
    }
    cout << "Enter Name: ";
    cin >> name;
    for(int i=0; i<6; i++) {
        cout << "Enter marks of subject " << i+1 << ": ";
        cin >> marks[i];
        if (!validate_marks(marks)) {
            cout << "Invalid Marks! Please Try Again." << endl;
            return;
        }
    }
}

bool Student::validate_rollno(int rollno) {
    // Check that roll number is within valid range
    return (rollno > 0 && rollno <= 1000);
}

bool Student::validate_marks(int marks[]) {
    // Check that all marks are within valid range
    for(int i=0; i<6; i++) {
        if(marks[i] < 0 || marks[i] > 100) {
            return false;
        }
    }
    return true;
}
