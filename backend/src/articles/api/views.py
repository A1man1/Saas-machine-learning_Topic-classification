from rest_framework.generics import ListAPIView, RetrieveAPIView
from articles.models import Article
from .serializer import ArticleSerializer
from django.http import HttpResponse
from djreact.modulMl import ml as m

class ArticleListView(ListAPIView):
		queryset=Article.objects.all()
		serializer_class = ArticleSerializer
   


class ArticleDetialView(RetrieveAPIView):
		queryset=Article.objects.all()
		serializer_class = ArticleSerializer
