from AutomatedApi import LearningApi


if __name__ == "__main__":
		
		data=input('Enter your data for test:')
		l=LearningApi(data)
		print(l.output())
