from django.urls import path , include, re_path

from .views import ArticleListView, ArticleDetialView 

urlpatterns=[
 path('',ArticleListView.as_view()),
 path('<pk>',ArticleDetialView.as_view()),
]