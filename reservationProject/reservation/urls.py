from django.urls import path
from .views import indexPageView
from .views import detailPageView

urlpatterns = [
    path("", indexPageView, name="index"),    
    path("detail/", detailPageView, name="detail"),
]    