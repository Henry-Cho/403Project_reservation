from django.urls import path
from .views import indexPageView, addPageView

urlpatterns = [
    path("", indexPageView, name="index"),
    path("add/", addPageView, name="add"),
]    