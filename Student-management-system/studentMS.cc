#include <iostream>
#include <fstream>
#include <cstdlib>
#include <cstdio>
#include <cstring>

using namespace std;

class Student {
    int rollno;
    char name[50];
    int marks[6];
public:
    void read();
    void display();
    void write();
    void read_file();
};

void Student::read() {
    cout << "\nEnter Roll number: ";
    cin >> rollno;
    cout << "Enter Name: ";
    cin >> name;
    for(int i=0; i<6; i++) {
        cout << "Enter marks of subject " << i+1 << ": ";
        cin >> marks[i];
    }
}

void Student::display() {
    cout << "\nRoll Number: " << rollno << endl;
    cout << "Name: " << name << endl;
    for(int i=0; i<6; i++) {
        cout << "Marks of Subject " << i+1 << ": " << marks[i] << endl;
    }
    cout << endl;
}

void Student::write() {
    ofstream outfile;
    outfile.open("students.txt", ios::out | ios::app);
    outfile.write((char*)this, sizeof(*this));
    outfile.close();
}

void Student::read_file() {
    ifstream infile;
    infile.open("students.txt", ios::in);
    if(!infile) {
        cout << "Error opening file!";
        return;
    }
    while(infile.read((char*)this, sizeof(*this))) {
        display();
    }
    infile.close();
}

int main() {
    int choice;
    Student s;
    while(true) {
        cout << "\nStudent Management System\n";
        cout << "1. Add Student\n";
        cout << "2. View Students\n";
        cout << "3. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;
        switch(choice) {
            case 1:
                s.read();
                s.write();
                break;
            case 2:
                s.read_file();
                break;
            case 3:
                exit(0);
            default:
                cout << "\nInvalid Choice! Please Try Again.\n";
        }
    }
    return 0;
}
