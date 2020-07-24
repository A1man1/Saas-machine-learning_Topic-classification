from django.db import models
from datetime import datetime, date
from djreact.modulMl import ml as m
# Create your models here.
import random 

from djreact import settings
class Article(models.Model):
		title=models.CharField(max_length=120)
		id = models.AutoField(primary_key=True)
		date =  models.DateTimeField(auto_now_add=True,blank=False)
		imageSrc = models.ImageField(upload_to='./images/')
		content=models.TextField()
		snippet=models.TextField(default=str(content)[:60])
		topic = models.CharField(max_length=100,blank=True,default=m.PredictML(str(content)))
		@classmethod
		def create(cls, topic):
        		topic = cls(title=topic)
        		return topic
		def __std__(self):
				return self.topic

		def __str__(self):
				return self.title

		def __image__(self):
				return self.imageSrc
				
