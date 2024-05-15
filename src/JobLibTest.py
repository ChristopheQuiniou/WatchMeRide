import joblib


def main():
    #exportWithJobLib()
    importWithJobLib("JobLibTest.cq")

#Export exemple
def exportWithJobLib():
    print("Exporting with JobLib")
    anObject = {
        "Name": "<What a name>",
        "Age": "18",
    }

    joblib.dump(value=anObject, filename="JobLibTest.cq")
    print("Exported ! ")


#Import exemple
def importWithJobLib(filename):
    print("Import with JobLib")
    anObject = joblib.load(filename=filename)
    print("Imported ! ")
    print(anObject)

if __name__ == '__main__':
    main()


