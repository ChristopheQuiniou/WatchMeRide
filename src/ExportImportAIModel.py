import joblib
import logging


def main():
    logging.basicConfig(filename='watchMeRide.logs', filemode='w', format='%(name)s - %(levelname)s - %(message)s')
    logging.getLogger().setLevel(logging.DEBUG)

    exportAIModel(aModel = {
        "Name": "<What a name>",
        "Age": "18",
    })
    importAIModel("JobLibTest.aimodel")


def exportAIModel(aModel):
    print("Exporting ")
    logging.info('Exporting the AI model')

    joblib.dump(value=aModel, filename="JobLibTest.aimodel")
    print("Exported ! ")


def importAIModel(filename):
    print("Importing AI model")
    logging.info('Importing the AI model')

    anObject = joblib.load(filename=filename)
    if anObject is None:
        print("AI model not imported")
        logging.error("AI model not imported")
        return False

    print("Imported ! ")
    print(anObject)
    return anObject



if __name__ == '__main__':
    main()


